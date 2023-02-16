import * as mongoose from 'mongoose';
import ICategorie from '../interfaces/categorie.interfaces';
const CategSchema = new mongoose.Schema(
    {
        name: String
    },  
    {
        timestamps: true
    }
  
);

const Categorie: mongoose.Model<ICategorie> = mongoose.model<ICategorie>('Categorie', CategSchema);

export { Categorie }