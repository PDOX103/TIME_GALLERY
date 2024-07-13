const jwt = require('jsonwebtoken');
const userModel = require("../models/userModel");

async function refreshTokenController(req, res) {
    try {
        const refreshToken = req.cookies?.refreshToken;

        if (!refreshToken) {
            return res.status(401).json({
                message: "Refresh token missing",
                error: true,
                success: false
            });
        }

        jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET_KEY, async (err, decoded) => {
            if (err) {
                throw new Error("Invalid refresh token");
            }

            const user = await userModel.findById(decoded._id);

            if (!user) {
                throw new Error("User not found");
            }

            const newTokenData = {
                _id: user._id,
                email: user.email
            };

            const newAccessToken = jwt.sign(newTokenData, process.env.TOKEN_SECRET_KEY, { expiresIn: '15m' });

            res.cookie("accessToken", newAccessToken, {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                sameSite: 'Strict'
            });

            res.json({
                message: "Access token refreshed",
                data: { accessToken: newAccessToken },
                success: true,
                error: false
            });
        });

    } catch (err) {
        res.status(400).json({
            message: err.message || err,
            error: true,
            success: false,
        });
    }
}

module.exports = refreshTokenController;
