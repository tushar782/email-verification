import nodemailer from 'nodemailer';

export const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // false for port 587, true for port 465
    auth: {
        user: "tusharpimple017@gmail.com", // your Gmail address
        pass: "sqgw dnmn kxwf oqwx", // replace with the App Password
    },
});

const sendMail = async () => {
    try {
        const info = await transporter.sendMail({
            from: '"tushar.dev 👻" <tusharpimple782@gmail.com>', // sender address
            to: "tusharpimple017@gmail.com", // list of receivers
            subject: "Confirmation Mail", // Subject line
            text: "", // plain text body
            html: "<b>Welcome, Sir !</b>", // html body
        });
        console.log("Message sent: %s", info.messageId);
    } catch (error) {
        console.error("Error sending email:", error);
    }
};

sendMail();
