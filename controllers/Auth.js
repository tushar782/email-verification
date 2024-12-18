import { SendVerificationCode, WelcomeEmail } from '../middleware/Email.js';
import Usermodel from '../models/User.js';
// import bcrypt from 'bcryptjs';

const register = async (req, res) => {
    try {
        // console.log('Request Body:', req.body); // Debugging incoming body
        // console.error('Error during user registration:', error);

        const { email, password, name } = req.body || {};
        if (!email || !password || !name) {
            return res.status(400).json({ message: 'Please fill in all fields.' });
        }

        // Check if the email already exists
        const existingUser = await Usermodel.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'Email already exists.' });
        }

        // generate the ramdom code 
        const verificationCode = Math.floor(100000 + Math.random() * 900000).toString()

        // Save plain text password without hashing
        const user = new Usermodel({
            email,
            password,
            name,
            verificationCode
        });
        SendVerificationCode(user.email, verificationCode)
        await user.save();
        res.status(201).json({ message: 'User created successfully.' });
    } catch (error) {
        console.error('Error during user registration:', error);
        res.status(500).json({ message: 'An error occurred during registration.' });
    }
};

const VerifyEmail = async (req, res) => {
    try {
        const { code } = req.body
        const user = await Usermodel.findOne({
            verificationCode: code
        })
        if (!user) {
            return res.status(400).json({ success: false, message: "Invalid Code" })
        }
        user.isVerified = true,
            user.verificationCode = undefined;
        await user.save()
        await WelcomeEmail(user.email, user.name)
        return res.status(200).json({ success: true, message: "Email Verified Successfully" })
    } catch (error) {
        console.error('Error during user registration:', error);
        res.status(500).json({ message: 'An error occurred during registration.' });
    }
}


export { register, VerifyEmail };
