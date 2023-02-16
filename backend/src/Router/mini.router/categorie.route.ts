import * as express from 'express';
import { CategorieControllers } from '../../controllers/categorie.controller';

class LivreurRoute {
    public Route: express.Router;

    constructor() {
        this.Route = express.Router();

        this.AppRouter();
    }

    private AppRouter() {
        this.Route.get('/get-all-categorie', CategorieControllers.GetAllCategorie);
        this.Route.post('/create-categorie', CategorieControllers.CreateCategorie);
        // this.Route.post('/get-One-categorie/:id', CategorieControllers.GetOneCategorie);
        this.Route.delete('/Remove-categorie/:id', CategorieControllers.RemoveCategorie);

        // this.Route.post('/add-livreur', UserControllers.AddLivreur);
        // this.Route.delete('/delete-livreur/:id', UserControllers.DeleteLivreur);
    }
}

export const categorie_route = new LivreurRoute().Route;