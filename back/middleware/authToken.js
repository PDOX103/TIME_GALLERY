const jwt = require('jsonwebtoken');

async function authToken(req, res, next) {
    try {
        const accessToken = req.cookies?.accessToken;

        if (!accessToken) {
            return res.json({
                message: "User not signed in",
                error: true,
                success: false
            });
        }

        jwt.verify(accessToken, process.env.TOKEN_SECRET_KEY, (err, decoded) => {
            if (err) {
                throw new Error("Invalid token");
            }
            req.user,id = decoded?._id;
            next();
        });
    } catch (err) {
        res.status(400).json({
            message: err.message || err,
            data: [],
            error: true,
            success: false
        });
    }
}

module.exports = authToken;
