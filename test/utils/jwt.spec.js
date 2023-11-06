import { createToken } from '../../src/utils/jwt';

jest.mock('jsonwebtoken');

process.env.SECRET_KEY = 'ONLY_TEST';

describe('JWT testing', () => {
    const payload = {
        id: '01',
        role: 'admin',
    };

    test('create password with hashPassword', () => {
        const passwordCreted = createToken(payload);

        console.log(passwordCreted);

        expect(passwordCreted).not.toBeNull();
    });
});
