import * as express from 'express';
import { UserControllers } from '../controllers/user.controller';

class AuthRoute {
    public Route: express.Router;

    constructor() {
        this.Route = express.Router();

        this.AuthRouter();
    }

    private AuthRouter() {
        this.Route.get('/get-all-livreur', UserControllers.GetAllLivreur);
        this.Route.post('/add-livreur', UserControllers.AddLivreur);
        this.Route.delete('/delete-livreur/:id', UserControllers.DeleteLivreur);
    }
}

export const app_route = new AuthRoute().Route;