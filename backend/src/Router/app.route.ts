import * as express from 'express';
import { livreur_route } from './mini.router/livreur.route'
import { vendeur_route } from './mini.router/vendeur.route'

class AppRoute {
    public Route: express.Router;

    constructor() {
        this.Route = express.Router();

        this.AppRouter();
    }

    private AppRouter() {
        this.Route.use('/livreur', livreur_route);
        this.Route.use('/vendeur', vendeur_route);
    }
}

export const app_route = new AppRoute().Route;