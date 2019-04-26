import {Router as ExpressRouter} from 'express';
import {getHomepage} from '../../controllers/dashboard/home';

const Router = ExpressRouter();

// GET Routes
Router.get('/', getHomepage);

export default Router;
