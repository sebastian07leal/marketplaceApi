import jwt from 'jsonwebtoken';

const createToken = (payload, time = '1d') => {
    const token = jwt.sign(payload, process.env.SECRET_KEY, {
        expiresIn: time,
    });
    //TODO: added error handler
    return token;
};

const verifyToken = (token) => {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    //TODO: added error handler
    return decoded;
};

export default {
    createToken,
    verifyToken,
};
