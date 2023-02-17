import * as mongoose from 'mongoose';
import IProduct from '../interfaces/Product.interfaces';
const ProdSchema = new mongoose.Schema(
    {
        name: { type: String, unique: true },
        description: String,
        image : String,
        prix : Number,
    },
    
    {
        timestamps: true
    }
  
);

const Product: mongoose.Model<IProduct> = mongoose.model<IProduct>('Product', ProdSchema);

export { Product }