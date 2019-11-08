import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import middleware from './app/middlewares/auth';

import UserController from './app/controllers/userController';
import FileController from './app/controllers/fileController';
import SessionController from './app/controllers/sessionController';
import ProviderController from './app/controllers/providerController';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/users/create', UserController.store);
routes.post('/session', SessionController.store);

routes.use(middleware);

routes.get('/providers', ProviderController.index);

routes.put('/users/update', UserController.update);

routes.post('/files', upload.single('file'), FileController.store);

export default routes;
