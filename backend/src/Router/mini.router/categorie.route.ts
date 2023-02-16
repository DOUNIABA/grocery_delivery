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
        this.Route.delete('/Remove-categorie/:id', CategorieControllers.RemoveCategorie);
        this.Route.put('/Edit-categorie/:id', CategorieControllers.UpdateCategorie);

    }
}

export const categorie_route = new LivreurRoute().Route;