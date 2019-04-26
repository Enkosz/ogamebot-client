import {Router as ExpressRouter} from 'express';
import homeRouter from './home';
import planetsRouter from './planets';

const Router = ExpressRouter();

// Routes List
Router.use('/', homeRouter);
Router.use('/planets', planetsRouter);

export default Router;
