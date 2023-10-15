import { Pool } from 'pg';
import dotenv from 'dotenv';

import { createToken } from '../utils/jwt';
import { hashPassword } from '../utils/hashUtil';
import { generateUuid } from '../utils/uuidUtil';

dotenv.config();

class UserService {
    _client;

    constructor() {
        try {
            this._client = new Pool({
                connectionString: process.env.POSTGRES_URL + '?sslmode=require',
            });
        } catch (error) {
            error.message = 'DB connection error';
            throw error;
        }
    }

    static getInstance() {
        if (!this.instance) {
            this.instance = new UserService();
        }
        return this.instance;
    }

    async createNewUser(data) {
        try {
            const { username: userName, password, role = 3 } = data;

            const customId = generateUuid();
            const passwordHashed = await hashPassword(password);

            await this._client.query(
                'INSERT INTO users (id, username, password, role) VALUES ($1, $2, $3, $4);',
                [customId, userName, passwordHashed, role],
            );

            await this._client.query(
                'INSERT INTO users_roles (user_id, role_id) VALUES ($1, $2);',
                [customId, role],
            );

            const payload = {
                customId,
                role,
            };

            const responseAuthToken = createToken(payload);

            return responseAuthToken;
        } catch (error) {
            error.message = 'Error when creating a new user';
            throw error;
        }
    }

    async removeUser(id) {
        try {
            await this._client.query(
                'DELETE FROM users_roles WHERE user_id = $1 RETURNING user_id;',
                [id],
            );

            await this._client.query('DELETE FROM users WHERE id = $1', [id]);

            return id;
        } catch (error) {
            error.message = 'Error when deleting a user';
            throw error;
        }
    }
}

export default UserService;
