const { verifyToken } = require('../utils/jwt');

function authMiddleware(req, res, next) {
    const {
        headers: { auth: token },
    } = req;

    if (!token) {
        return res
            .status(401)
            .json({ message: 'Access denied. Token not provided.' });
    }

    try {
        const decoded = verifyToken(token);

        req.user = decoded;

        next();
    } catch (err) {
        res.status(403).json({ message: 'Invalid token.' });
    }
}

module.exports = { authMiddleware };
