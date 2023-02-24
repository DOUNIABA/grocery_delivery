import * as express from 'express';
import { livreur_route } from './mini.router/livreur.route'
import { vendeur_route } from './mini.router/vendeur.route'
import { categorie_route } from './mini.router/categorie.route'
import { Product_route } from './mini.router/product.route'

import { UserControllers } from '../controllers/user.controller'

class AppRoute {
    public Route: express.Router;

    constructor() {
        this.Route = express.Router();

        this.AppRouter();
    }

    private AppRouter() {
        this.Route.use('/livreur', livreur_route);
        this.Route.use('/vendeur', vendeur_route);
        this.Route.use('/categorie', categorie_route);
        this.Route.use('/produit', Product_route);
        this.Route.get('/statistique', UserControllers.Statistique);
    }
}

export const app_route = new AppRoute().Route;