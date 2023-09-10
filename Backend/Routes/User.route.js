const express = require('express')
const { UserModel } = require('../Model/User.model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const nodemailer = require("nodemailer");


const UserRoute = express.Router()

UserRoute.get('/', async (req, res) => {
    try {
        const data = await UserModel.find();
        if (!data || data.length === 0) {
            return res.status(404).json({ message: 'No user data found.' });
        }
        res.status(200).json(data);
    } catch (error) {
        console.error('Error fetching user data:', error);
        res.status(500).json({ message: 'Internal server error.' });
    }
});

UserRoute.post('/register', async (req, res) => {
    const { firstName, lastName, email, mobile, gender, password } = req.body;
    // Define a function to validate the email
    const isValidEmail = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    try {

        const existingUser = await UserModel.find({ email });

        // Check if the email is valid (call the function)
        if (!isValidEmail(email)) {
            return res.status(500).json({ message: 'Email is not valid. Please check.', status: false });
        }

        if (existingUser.length > 0) {
            return res.status(404).json({ message: 'User already exists. Please try again with a different email.', status: false });
        }

        bcrypt.hash(password, 10, async (err, hash) => {
            if (err) {
                return res.status(500).json({ status: false, message: err.message });
            }

            try {
                const newUser = await UserModel.create({
                    firstName,
                    lastName,
                    email,
                    mobile,
                    password: hash,
                });

                console.log(newUser)
                // If everything is okay, you can send a success response
                return res.status(200).json({ status: true, message: "User Register Successfully" });
            } catch (err) {
                return res.status(500).json({ status: false, message: err.message });
            }
        });
    } catch (error) {
        console.error('Error during registration:', error);
        res.status(500).json({ message: 'Internal server error.', status: false });
    }
});


UserRoute.post('/login', async (req, res) => {
    const { email, password } = req.body
    try {

        const finduser = await UserModel.find({ email })


        if (finduser < 1) {
            return res.status(404).json({ message: "Please Register first", status: false })
        }

        bcrypt.compare(password, finduser[0].password, async (err, result) => {
            if (result) {
                const token = jwt.sign({ UserID: finduser[0]._id }, "saikhmirsat", {
                    expiresIn: "1d",
                });

                await UserModel.updateMany(
                    { _id: finduser[0]._id },
                    [{ $set: { loginToken: token } }, { $set: { isAuthUser: true } }]
                );

                const user = await UserModel.find({ email });



                return res.status(200).json({ status: true, message: "User Login Successfully", user: user[0] });
            } else {
                return res.send({ status: false, message: "Wrong creadencial" });
            }
        })


    } catch {
        console.error('Error during registration:', error)
        res.status(500).json({ message: 'Internal server error.', status: false })
    }
})

UserRoute.post('/forgetpassword', async (req, res) => {
    const { email } = req.body
    try {

        const finduser = await UserModel.find({ email })
        console.log(finduser)

        if (finduser.length > 0) {
            const token = jwt.sign(
                { UserID: finduser[0]._id },
                "saikhmirsat",
                { expiresIn: "1day" } // Set the expiration time to 2 minutes
            );

            await UserModel.updateMany({ _id: finduser[0]._id }, [
                { $set: { loginToken: token } },
                { $set: { date_of_update_password: new Date() } },
            ]);

            const transporter = nodemailer.createTransport({
                service: "Gmail",
                auth: {
                    user: "saikh.mirsat55@gmail.com",
                    pass: "obktgevmkgfhxmqc",
                },
            });

            // Compose the email
            const mailOptions = {
                from: "saikh.mirsat55@gmail.com",
                to: finduser[0].email,
                subject: "Password Reset",
                text: `Here is your password reset link: http://localhost:3000/LoginAndRegister/Setpassword/${finduser[0]._id}/${token}`,
            };

            // Send the email
            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    console.error("Error sending email:", error);
                    res.send({ status: false, message: "Error sending email" });
                } else {
                    console.log("Email sent:", info.response);
                    res.send({ status: true, message: "Email sent successfully" });
                }
            });

        } else {
            res.send({ status: false, message: "Email not found. Please check your email!" });
        }


    } catch (err) {
        console.error({ 'Error': err })
        res.status(500).json({ message: 'Internal server error.', status: false })
    }
})


UserRoute.patch("/setpassword/:id/:token", async (req, res) => {
    const { id, token } = req.params;
    const { password } = req.body;

    try {
        // Find the user by ID and token
        const findUser = await UserModel.findOne({ _id: id, loginToken: token });

        if (!findUser) {
            // No matching user found
            return res
                .status(404)
                .json({ success: false, message: "Invalid ID or token" });
        }

        const decodedToken = jwt.decode(token);
        const currentTime = Math.floor(Date.now() / 1000); // Convert to seconds

        if (decodedToken.exp < currentTime) {
            return res
                .status(400)
                .json({
                    success: false,
                    message:
                        "Password reset link has expired. Please request a new reset link.",
                });
        }

        // Update the user's password
        bcrypt.hash(password, 10, async (err, hash) => {
            if (err) {
                console.error("Password hash error:", err);
                return res
                    .status(500)
                    .json({
                        success: false,
                        message: "An error occurred while hashing the password.",
                    });
            }

            try {
                findUser.password = hash;
                await findUser.save();
                res
                    .status(200)
                    .json({ success: true, message: "Password updated successfully" });

                const token = jwt.sign(
                    { UserID: findUser._id },
                    "saikhmirsat",
                    { expiresIn: "1day" } // Set the expiration time to 1 minute
                );

                await UserModel.updateMany(
                    { _id: findUser._id },
                    [{ $set: { loginToken: token } }, { $set: { date_of_updata_password: new Date } }]
                );
            } catch (err) {
                console.error("Password update error:", err);
                res
                    .status(500)
                    .json({
                        success: false,
                        message: "An error occurred while updating the password.",
                    });
            }
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({ success: false, message: "An error occurred" });
    }
});



module.exports = {
    UserRoute
}