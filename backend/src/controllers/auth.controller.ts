import { Request, Response } from 'express';
import validator from 'validator';
import { Password } from '../functions/password.function';
import { Token } from '../functions/token.function';
import { User } from '../models/user.model';

export class AuthControllers {
    static async Login(req: Request, res: Response) {
        try {
            const { email, password } = req.body
            if (email == '' || password == '') res.json({ error: 'Fill the all fields to login' })
            else if (!validator.isEmail(email)) res.json({ error: `${email} is not email` })
            else {
                const find_user = await User.findOne({ email })
                if (!find_user) res.json({ error: 'Email or password is inccorect' })
                else {
                    const verify_password = await Password.compare(password, find_user.password)
                    if (!verify_password) res.json({ error: 'Email or password is inccorect' })
                    else {
                        const token = await Token.Token(find_user._id)
                        res.header({ token })
                        res.json({ token, email, username: find_user.username })
                    }
                }
            }
        } catch (error) {
            res.status(500).json({ error: error });
        }
    }

    static async Register(req: Request, res: Response) {
        try {
            const { username, email, password, confirm_password } = req.body;
            if (username == '' || email == '' || password == '') res.json({ error: 'Fill the all fields to register' })
            else if (!validator.isAlpha(username)) res.json({ error: `${username} is not username` })
            else if (!validator.isEmail(email)) res.json({ error: `${email} is not email` })
            else if (!validator.equals(password, confirm_password)) res.json({ error: 'Passwords does not match' })
            else {
                const find_user = await User.findOne({ email })
                if (find_user) res.json({ error: 'User existed' })
                else {
                    const hash = await Password.hash(password)
                    const create_user = await User.create({
                        username,
                        email,
                        password: hash,
                        role: 'Client'
                    })
                    if (!create_user) res.json({ error: 'Error creating user' })
                    res.json({ message: 'User Created Successfully' })
                }
            }
        } catch (error) {
            res.status(500).json({ error: error });
        }
    }

    static async Logout(req: Request, res: Response) {
        try {
            res.json({ message: 'Logout Successfully' })
        } catch (error) {
            res.status(500).json({ error: error });
        }
    }
}