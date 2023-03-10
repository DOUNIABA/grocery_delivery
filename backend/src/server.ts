import express from 'express';
import mongoose from 'mongoose';
import 'dotenv/config';
import env from './utiles/index';

import { auth_route } from './Router/auth.route';
import { app_route } from './Router/app.route';

import cors from 'cors'

class App {
    public app: express.Application;

    constructor() {
        this.app = express();

        this.connectToTheDatabase();
        this.initializeMiddlewares();
        this.initializeControllers();
    }

    public listen() {
        this.app.listen(env.PORT, () => {
            console.log(`App listening on the port ${env.PORT}`);
        });
    }

    private initializeMiddlewares() {
        this.app.use(express.json());
        this.app.use(cors());
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(express.static("public"));
    }

    private initializeControllers() {
        this.app.use('/api/auth', auth_route);
        this.app.use('/api', app_route);
        this.app.all('*', async (req, res) => {
            res.json({ error: 'Page not found' })
        });
    }

    private connectToTheDatabase() {
        mongoose.connect(env.DATA_BASE, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        })
            .then(() => {
                console.log('Successfully connect');
            })
            .catch(error => {
                console.log('Connection error', error);
            })
    }
}

export const app = new App().listen();