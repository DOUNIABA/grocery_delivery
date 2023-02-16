import * as express from 'express';
import { UserControllers } from '../controllers/user.controller';

class AuthRoute {
    public Route: express.Router;

    constructor() {
        this.Route = express.Router();

        this.AppRouter();
    }

    private AppRouter() {
        this.Route.get('/get-all-livreur', UserControllers.GetAllLivreur);
        this.Route.post('/add-livreur', UserControllers.AddLivreur);
        this.Route.delete('/delete-livreur/:id', UserControllers.DeleteLivreur);

        this.Route.get('/get-all-vendeur', UserControllers.GetAllVendeur);
        this.Route.post('/add-vendeur', UserControllers.AddVendeur);
        this.Route.delete('/delete-vendeur/:id', UserControllers.DeleteVendeur);
    }
}

export const app_route = new AuthRoute().Route;