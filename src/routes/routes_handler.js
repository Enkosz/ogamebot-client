import {Router as ExpressRouter} from 'express';
import dashboardMainHandler from './dashboard/dashboard_main_handler';

const Router = ExpressRouter();

// Routes List
Router.use('/', dashboardMainHandler);

export default Router;
