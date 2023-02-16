import * as express from 'express';
import { UserControllers } from '../../controllers/user.controller';

class LivreurRoute {
    public Route: express.Router;

    constructor() {
        this.Route = express.Router();

        this.AppRouter();
    }

    private AppRouter() {
        this.Route.get('/get-all-livreur', UserControllers.GetAllLivreur);
        this.Route.post('/add-livreur', UserControllers.AddLivreur);
        this.Route.delete('/delete-livreur/:id', UserControllers.DeleteLivreur);
    }
}

export const livreur_route = new LivreurRoute().Route;