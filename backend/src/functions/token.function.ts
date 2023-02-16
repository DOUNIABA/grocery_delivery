const jwt = require('jsonwebtoken');
import 'dotenv/config';
import env from '../utiles/index';

export class Token {
    static async Token(user: any) {
        const token = await jwt.sign({ _id: user._id }, env.SECRET_TOKEN, { expiresIn: "24h" })
        return token
    }
    static async Verify(token: any) {
        const verify = await jwt.verify(token, env.SECRET_TOKEN)
        return verify
    }
}