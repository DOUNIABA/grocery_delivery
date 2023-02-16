import * as express from 'express';
import { UserControllers } from '../../controllers/user.controller';

class VendeurRoute {
    public Route: express.Router;

    constructor() {
        this.Route = express.Router();

        this.AppRouter();
    }

    private AppRouter() {
        this.Route.get('/get-all-vendeur', UserControllers.GetAllVendeur);
        this.Route.post('/add-vendeur', UserControllers.AddVendeur);
        this.Route.delete('/delete-vendeur/:id', UserControllers.DeleteVendeur);
    }
}

export const vendeur_route = new VendeurRoute().Route;