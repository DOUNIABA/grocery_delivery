import * as mongoose from 'mongoose';
import IProduct from '../interfaces/Product.interfaces';
const ProdSchema = new mongoose.Schema(
    {
        name: String
    },  
    {
        timestamps: true
    }
  
);

const Product: mongoose.Model<IProduct> = mongoose.model<IProduct>('Product', ProdSchema);

export { Product }