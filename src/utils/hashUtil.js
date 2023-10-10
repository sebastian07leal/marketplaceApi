const bcrypt = require('bcryptjs');

const hashPassword = async (password) => {
    const hash = await bcrypt.hash(password, 10);
    return hash;
};

const verifyPassword = async (password, hash) => {
    const isPasswordCorrect = await bcrypt.compare(password, hash);

    if (!isPasswordCorrect) {
        throw new Error('password no valid');
    }

    return isPasswordCorrect;
};

module.exports = {
    hashPassword,
    verifyPassword,
};
