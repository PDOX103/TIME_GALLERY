const jwt = require('jsonwebtoken');

async function authToken(req, res, next) {
    try {
        const token = req.cookies?.accessToken; // Fetch access token

        if (!token) {
            return res.json({
                message: "User not signed in",
                error: true,
                success: false
            });
        }

        jwt.verify(token, process.env.TOKEN_SECRET_KEY, (err, decoded) => {
            if (err) {
                throw new Error("Invalid token");
            }
            req.user = decoded; // Attach user data to request
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
