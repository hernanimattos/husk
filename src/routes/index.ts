import { Router } from 'express';
import { user } from './user/user';

const routes = Router();

routes.use('/user', user);

export { routes };
