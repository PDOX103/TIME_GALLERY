const userSignOutController = (req, res) => {
    res.clearCookie('token');
    res.status(200).json({
        message: "User signed out successfully",
        success: true,
        error: false
    });
};

module.exports = userSignOutController;
