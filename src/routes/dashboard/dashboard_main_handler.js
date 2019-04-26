import {Router as ExpressRouter} from 'express';
import homeRouter from './home';

const Router = ExpressRouter();

// Routes List
Router.use('/', homeRouter);

export default Router;
