import { Request,Response } from "express";
import { Categorie } from "../models/categorie.model";

export class CategorieControllers {
    static async GetAllCategorie(req: Request, res: Response){
        try{
            const {name} = req.body
            const categories = await Categorie.find({name})
            res.json({categories})
        }
        catch (error){
            res.status(500).json({msg:error})
        }
    }

   static async CreateCategorie (req: Request, res: Response){
    try{
        const {name}=req.body
        const create_categorie= await Categorie.create({name})
        res.json({ create_categorie })           
    }
    catch(error){
        res.status(500).json({msg:error})
    }
    }
        
      static async RemoveCategorie (req: Request, res: Response){{
        try{
            const { id } = req.params;
        const rem= await Categorie.findOneAndRemove({_id:id})
        res.json({msg:"removed"})           
        }
        catch(error){
            res.status(500).json({msg:error})
        }
    }
    
        }
       
}
    
