const userModel = require("../models/userModel");
const bcrypt = require('bcryptjs');

async function updateUserDetailsController(req, res) {
    try {
        const userId = req.user._id;
        const { name, email, password } = req.body;

        const user = await userModel.findById(userId);

        if (!user) {
            throw new Error("User not found");
        }

        if (name) user.name = name;
        if (email) user.email = email;
        if (password) {
           const userSignOutController = (req, res) => {
    res.clearCookie('accessToken');
    res.status(200).json({
        message: "User signed out successfully",
        success: true,
        error: false
    });
};

module.exports = userSignOutController;
 const salt = bcrypt.genSaltSync(10);
            user.password = bcrypt.hashSync(password, salt);
        }

        const updatedUser = await user.save();

        res.status(200).json({
            data: updatedUser,
            success: true,
            error: false,
            message: "User updated successfully"
        });
    } catch (err) {
        res.status(400).json({
            message: err.message || err,
            error: true,
            success: false
        });
    }
}

module.exports = updateUserDetailsController;
