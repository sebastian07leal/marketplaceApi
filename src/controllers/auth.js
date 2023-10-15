import Auth from '../services/authService';

const loginUser = async (req, res) => {
    try {
        const { headers } = req;

        const response = await Auth.getInstance().login(headers);

        res.send(response);
    } catch (error) {
        res.status(403).json({
            error: `Unauthenticated user: ${error.message}`,
        });
    }
};

export { loginUser };
