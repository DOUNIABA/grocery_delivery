import { Request, Response } from "express";
import { Product } from "../models/product.model";

export class ProductControllers {
    static async GetAllProduct(req: Request, res: Response) {
        try {
            const Products = await Product.find()
            if (!Product) res.status(400).json({
                message: "pas de  Produit"
            })
            res.json({ Products })
        }
        catch (error) {
            res.status(500).json({ msg: error })
        }
    }

    static async CreateProduct(req: Request, res: Response) {
        try {
            const { name, description, categorie, prix, image } = req.body
            if (!name || !description || !prix || !categorie || !image) res.status(400).json({ message: "remplire les champs" })
            else {
                const create_Product = await Product.create({
                    name,
                    description,
                    categorie,
                    image,
                    prix,
                })
                if (!create_Product) res.status(400).json({ message: "produit non crée" })
                else res.json({ message: " produit est crée " })
            }
        }
        catch (error) {
            res.status(500).json({ msg: error })
        }
    }

    static async RemoveProduct(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const remove = await Product.findOneAndRemove({ _id: id })
            if (remove) res.json({ msg: "removed" })
        }
        catch (error) {
            res.status(500).json({ msg: error })

        }
    }

    static async UpdateProduct(req: Request, res: Response) {
        try {
            const id = req.params.id
            const { body } = req
            const find_Product = await Product.updateOne({ _id: id }, { ...body })
            if (find_Product) res.json({ msg: 'updated' })
        }
        catch (error) {
            res.status(500).json({ msg: error })
        }


    }
}

