import { transporter } from "./EmailConfig.js";
import { Verification_Email_Template , Welcome_Email_Template } from "../libs/EmailTemplate.js";

export const SendVerificationCode = async (email, verificationCode) => {
    try {
        const response = await transporter.sendMail({
            from: '"tushar.dev 👻" <tusharpimple782@gmail.com>', // sender address
            to: email, // list of receivers
            subject: "Welcome Mail", // Subject line
            text: "Verify Your Email", // plain text body
            html: Verification_Email_Template.replace("verificationCode", verificationCode), // html body
        });
        console.log(`Email Send Success. ${response}`)
    } catch (error) {
        console.log(`Error Occured. ${error}`)
    }
}



export const WelcomeEmail = async (email, name) => {
    try {
        const response = await transporter.sendMail({
            from: '"tushar.dev 👻" <tusharpimple782@gmail.com>', // sender address
            to: email, // list of receivers
            subject: "Verify Mail", // Subject line
            text: "Verify Your Email", // plain text body
            html: Welcome_Email_Template.replace("{name}", name), // html body
        });
        console.log(`Email Send Success. ${response}`)
    } catch (error) {
        console.log(`Error Occured. ${error}`)
    }
}

