const userModel = require("../models/userModel");

async function userDetailsController(req, res) {
    try {
        const userId = req.user._id;
        const user = await userModel.findById(userId, '-password'); // Exclude password field

        if (!user) {
            throw new Error("User not found");
        }

        res.status(200).json({
            data: user,
            success: true,
            error: false
        });
    } catch (err) {
        res.status(400).json({
            message: err.message || err,
            error: true,
            success: false
        });
    }
}

module.exports = userDetailsController;
