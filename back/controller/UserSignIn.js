const bcrypt = require("bcryptjs");
const userModel = require("../models/userModel");
const jwt = require('jsonwebtoken');

async function userSignInController(req, res) {
    try {
        const { email, password } = req.body;

        if (!email) {
            throw new Error("Please provide email");
        }
        if (!password) {
            throw new Error("Please provide password");
        }

        const user = await userModel.findOne({ email });

        if (!user) {
            throw new Error("User not found");
        }

        const checkPassword = await bcrypt.compare(password, user.password);

        if (checkPassword) {
            const tokenData = {
                _id: user._id,
                email: user.email
            };

            const accessToken = jwt.sign(tokenData, process.env.TOKEN_SECRET_KEY, { expiresIn: '15m' }); // Shorter lifespan
            const refreshToken = jwt.sign(tokenData, process.env.REFRESH_TOKEN_SECRET_KEY, { expiresIn: '7d' });

            const tokenOption = {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                sameSite: 'Strict'
            };
            
            //res.cookie("accessToken", accessToken, tokenOption);
            res.cookie("refreshToken", refreshToken, { ...tokenOption, maxAge: 7 * 24 * 60 * 60 * 1000 }); // 7 days

            res.cookie("accessToken",accessToken,tokenOption).status(200).json({
                message : "Signed in successfully",
                data: { accessToken, refreshToken },
                success : true,
                error : false
            })
    
        } else {
            throw new Error("Please check password");
        }

    } catch (err) {
        res.status(400).json({
            message: err.message || err,
            error: true,
            success: false,
        });
    }
}

module.exports = userSignInController;