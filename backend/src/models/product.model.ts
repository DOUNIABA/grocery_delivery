import * as mongoose from 'mongoose';
import IProduct from '../interfaces/Product.interfaces';
const ProdSchema = new mongoose.Schema(
    {
        name: String,
        description: String,
        categorie: String,
        image: String,
        prix: Number,
        quantite: { type: Number, default: 1 }
    },

    {
        timestamps: true
    }

);

const Product: mongoose.Model<IProduct> = mongoose.model<IProduct>('Product', ProdSchema);

export { Product }