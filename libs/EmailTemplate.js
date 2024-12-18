
export const Verification_Email_Template = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Email Verification</title>
    <style>
        body {
            font-family: Arial, Helvetica, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f8f9fa;
            color: #333333;
        }
        .container {
            max-width: 600px;
            margin: 30px auto;
            background: #ffffff;
            border-radius: 8px;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
            overflow: hidden;
            border: 1px solid #ddd;
        }
        .header {
            background: #4CAF50; /* Green header */
            color: #ffffff;
            text-align: center;
            padding: 20px 10px;
            font-size: 24px;
            font-weight: bold;
        }
        .content {
            padding: 25px;
            text-align: center;
            line-height: 1.8;
            color: #555555;
        }
        .content p {
            margin: 15px 0;
            font-size: 16px;
        }
        .verification-code {
            display: inline-block;
            background-color: #f1f1f1;
            padding: 10px 20px;
            margin: 20px 0;
            font-size: 24px;
            font-weight: bold;
            letter-spacing: 3px;
            color: #333333;
            border: 1px dashed #4CAF50;
            border-radius: 5px;
        }
        .button {
            display: inline-block;
            margin: 25px 0;
            padding: 10px 20px;
            font-size: 16px;
            font-weight: bold;
            color: #ffffff;
            background-color: #4CAF50;
            text-decoration: none;
            border-radius: 5px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            transition: background 0.3s ease;
        }
        .button:hover {
            background-color: #45a049;
        }
        .footer {
            background: #f4f4f4;
            text-align: center;
            color: #777;
            font-size: 14px;
            padding: 15px 10px;
        }
        .footer a {
            color: #4CAF50;
            text-decoration: none;
        }
        @media (max-width: 600px) {
            .content, .header, .footer {
                padding: 15px;
            }
            .verification-code {
                font-size: 20px;
                padding: 8px 15px;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            Verify Your Email
        </div>
        <div class="content">
            <p>Hello,</p>
            <p>Thank you for registering with us! To verify your email address, please use the following verification code:</p>
            <span class="verification-code">{{verificationCode}}</span>
            <p>Alternatively, click the button below to verify your account:</p>
            <a href="#" class="button">Verify My Email</a>
            <p>If you didn't request this email, please ignore it.</p>
        </div>
        <div class="footer">
            <p>&copy; <script>document.write(new Date().getFullYear());</script> tushar.dev | All Rights Reserved.</p>
            <p>Need help? <a href="mailto:support@tushar.dev">Contact Support</a></p>
        </div>
    </div>
</body>
</html>

`

export const Welcome_Email_Template = (name) => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Verify Your Email</title>
     <style>
        body {
            font-family: Arial, Helvetica, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
        }
        .container {
            max-width: 600px;
            margin: 30px auto;
            background: #ffffff;
            border-radius: 8px;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
            overflow: hidden;
            border: 1px solid #ddd;
        }
        .content {
            padding: 25px;
            color: #333;
            line-height: 1.8;
        }
        .verification-code {
            display: block;
            margin: 20px 0;
            font-size: 20px;
        }
    </style>
</head>
<body>
     <div class="container">
        <div class="header">Verify Your Email</div>
        <div class="content">
            <p>Hello ${name},</p>
            <p>Thank you for registering with us!</p>
        </div>
        <div class="footer">
            <p>&copy; ${new Date().getFullYear()} tushar.dev All Rights Reserved.</p>
        </div>
    </div>
</body>
</html>
`;
