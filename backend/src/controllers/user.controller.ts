import { Request, Response } from 'express';
import validator from 'validator';
import { Password } from '../functions/password.function';
import { User } from '../models/user.model';
import { Product } from '../models/product.model';
import { Categorie } from '../models/categorie.model';

export class UserControllers {
    static async GetAllLivreur(req: Request, res: Response) {
        try {
            const get_all_livreur = await User.find({ role: 'Livreur' })
            res.json({ get_all_livreur })
        } catch (error) {
            res.status(500).json({ error: error });
        }
    }

    static async AddLivreur(req: Request, res: Response) {
        try {
            const { username, email } = req.body;
            if (username == '' || email == '') res.json({ error: 'Fill the all fields to register' })
            else if (!validator.isAlpha(username)) res.json({ error: `${username} is not username` })
            else if (!validator.isEmail(email)) res.json({ error: `${email} is not email` })
            else {
                const find_user = await User.findOne({ email })
                if (find_user) res.json({ error: 'Livreur existed' })
                else {
                    const password = '111'
                    const hash = await Password.hash(password)
                    const create_user = await User.create({
                        username,
                        email,
                        password: hash,
                        role: 'Livreur'
                    })
                    if (!create_user) res.json({ error: 'Error creating livreur' })
                    res.json({ message: 'Livreur Created Successfully' })
                }
            }
        } catch (error) {
            res.status(500).json({ error: error });
        }
    }

    static async DeleteLivreur(req: Request, res: Response) {
        try {
            const { id } = req.params;
            if (id == '') res.json({ error: 'Fill the all fields to register' })
            else {
                const find_user = await User.findById(id)
                if (!find_user) res.json({ error: 'Livreur not found' })
                else {
                    if (find_user.status) {
                        const delete_user = await User.updateOne({ _id: id }, { status: false })
                        if (!delete_user) res.json({ error: 'Error banned livreur' })
                        res.json({ message: 'Livreur banned' })
                    }
                    else {
                        const delete_user = await User.updateOne({ _id: id }, { status: true })
                        if (!delete_user) res.json({ error: 'Error unbanned livreur' })
                        res.json({ message: 'Livreur unbanned' })
                    }
                }
            }
        } catch (error) {
            res.status(500).json({ error: error });
        }
    }


    static async GetAllVendeur(req: Request, res: Response) {
        try {
            const get_all_Vendeur = await User.find({ role: 'Vendeur' })
            res.json({ get_all_Vendeur })
        } catch (error) {
            res.status(500).json({ error: error });
        }
    }

    static async AddVendeur(req: Request, res: Response) {
        try {
            const { username, email } = req.body;
            if (username == '' || email == '') res.json({ error: 'Fill the all fields to add venduer' })
            else if (!validator.isAlpha(username)) res.json({ error: `${username} is not username` })
            else if (!validator.isEmail(email)) res.json({ error: `${email} is not email` })
            else {
                const find_user = await User.findOne({ email })
                if (find_user) res.json({ error: 'Vendeur existed' })
                else {
                    const password = '111'
                    const hash = await Password.hash(password)
                    const create_user = await User.create({
                        username,
                        email,
                        password: hash,
                        role: 'Vendeur'
                    })
                    if (!create_user) res.json({ error: 'Error creating vendeur' })
                    res.json({ message: 'Vendeur Created Successfully' })
                }
            }
        } catch (error) {
            res.status(500).json({ error: error });
        }
    }

    static async DeleteVendeur(req: Request, res: Response) {
        try {
            const { id } = req.params;
            if (id == '') res.json({ error: 'Fill the all fields to register' })
            else {
                const find_user = await User.findById(id)
                if (!find_user) res.json({ error: 'Vendeur not found' })
                else {
                    if (find_user.status) {
                        const delete_user = await User.updateOne({ _id: id }, { status: false })
                        if (!delete_user) res.json({ error: 'Error banned vendeur' })
                        res.json({ message: 'Vendeur banned' })
                    }
                    else {
                        const delete_user = await User.updateOne({ _id: id }, { status: true })
                        if (!delete_user) res.json({ error: 'Error unbanned vendeur' })
                        res.json({ message: 'Vendeur unbanned' })
                    }
                }
            }
        } catch (error) {
            res.status(500).json({ error: error });
        }
    }

    static async Statistique(req: Request, res: Response) {
        const client = await User.find({role: 'Client'}).count()
        const livreur = await User.find({role: 'Livreur'}).count()
        const vendeur = await User.find({role: 'Vendeur'}).count()
        const product = await Product.find().count()
        const categorie = await Categorie.find().count()

        res.json({client, livreur, vendeur, product, categorie})
    }
}