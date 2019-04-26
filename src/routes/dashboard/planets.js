import {Router as ExpressRouter} from 'express';
import {getPlanetsList} from '../../controllers/dashboard/planets';

const Router = ExpressRouter();

// GET Routes
Router.get('/list', getPlanetsList);

export default Router;
