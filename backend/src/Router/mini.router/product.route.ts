import * as express from 'express';
import { ProductControllers } from '../../controllers/product.controller';

class ProductRoute {
    public Route: express.Router;

    constructor() {
        this.Route = express.Router();

        this.AppRouter();
    }

    private AppRouter() {
        this.Route.get('/get-all-Product', ProductControllers.GetAllProduct);
        this.Route.post('/create-Product', ProductControllers.CreateProduct);
        this.Route.delete('/Remove-Product/:id', ProductControllers.RemoveProduct);
        this.Route.put('/Edit-Product/:id', ProductControllers.UpdateProduct);

    }
}

export const Product_route = new ProductRoute().Route;