import * as express from 'express';
import { AuthControllers } from '../controllers/auth.controller';

class AuthRoute {
    public Route: express.Router;

    constructor() {
        this.Route = express.Router();

        this.AuthRouter();
    }

    private AuthRouter() {
        this.Route.post('/login', AuthControllers.Login);
        this.Route.post('/register', AuthControllers.Register);
        this.Route.get('/logout', AuthControllers.Logout);
    }
}

export const auth_route = new AuthRoute().Route;