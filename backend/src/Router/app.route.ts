import * as express from 'express';

class AuthRoute {
    public Route: express.Router;

    constructor() {
        this.Route = express.Router();

        this.AuthRouter();
    }

    private AuthRouter() {
        this.Route.get('/admin', (req, res) => {
            res.send('Admin')
        });
        this.Route.get('/vendeur', (req, res) => {
            res.send('Vendeur')
        });
        this.Route.get('/livreur', (req, res) => {
            res.send('Livreur')
        });
        this.Route.get('/client', (req, res) => {
            res.send('Client')
        });
    }
}

export const app_route = new AuthRoute().Route;