import { Request,Response } from "express";
import { Categorie } from "../models/categorie.model";

export class CategorieControllers {
    static async GetAllCategorie(req: Request, res: Response){
        try{
            const categories = await Categorie.find()
            res.json({categories})
        }
        catch (error){
            res.status(500).json({msg:error})
        }
    }

    static async GetOneCategorie(req: Request, res: Response){
        try {
              const {id}= req.params
        const categorie= await Categorie.findOne({_id:id})
        res.json({categorie})
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

    //   static async RemoveCategorie (req: Request, res: Response){
    //     try{
    //     const {id} = req.params;
    //     const remove = await Categorie.findOneAndRemove({id})
    //     if(remove) res.json({msg:"removed"})           
    //     }
    //     catch(error){
    //         res.status(500).json({msg:error})
        
    // }
    //     }

    static async DeleteCategorie(req: Request, res: Response) {
        try {
            const { id } = req.params;
                const categorie = await Categorie.findById(id)
                if (!categorie) res.json({ error: 'Categorie not found' })
                else {
                    const delete_Categorie = await Categorie.updateOne({ _id: id }, { status: false })
                    if (!delete_Categorie) res.json({ error: 'Error deleting categorie' })
                    res.json({ message: 'Categorie deleted Successfully' })
                }
            } catch (error) {
            res.status(500).json({ error: error });
        }
    }

        static async UpdateCategorie(req: Request, res: Response){
            try{
                const id = req.params.id
                const {body}=req
                const find_categorie= await Categorie.updateOne({_id:id},{...body})
                if(find_categorie) res.json({msg:'updated'})
            }
            catch(error){
                res.status(500).json({msg:error})
            }
          

          }
        }
    
