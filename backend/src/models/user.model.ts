import * as mongoose from 'mongoose';
import IUser from '../interfaces/user.interface';

const UserSchema = new mongoose.Schema(
    {
        username: String,
        email: { type: String, unique: true },
        password: String,
        role: String,
        image: String,
        status: { type: Boolean, default: false },
    },
    {
        timestamps: true
    }
);

const User: mongoose.Model<IUser> = mongoose.model<IUser>('User', UserSchema);

export { User }