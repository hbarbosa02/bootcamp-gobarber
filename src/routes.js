import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import middleware from './app/middlewares/auth';

import UserController from './app/controllers/userController';
import FileController from './app/controllers/fileController';
import SessionController from './app/controllers/sessionController';
import ProviderController from './app/controllers/providerController';
import ScheduleController from './app/controllers/scheduleController';
import AppoitmentController from './app/controllers/appoitmentController';
import NotificationController from './app/controllers/notificationController';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/users/create', UserController.store);
routes.post('/session', SessionController.store);

routes.use(middleware);

routes.put('/users/update', UserController.update);

routes.get('/providers', ProviderController.index);

routes.get('/appointments', AppoitmentController.index);
routes.post('/appointments', AppoitmentController.store);
routes.delete('/appointments/:id', AppoitmentController.delete);

routes.get('/schedule', ScheduleController.index);

routes.get('/notifications', NotificationController.index);
routes.put('/notifications/:id', NotificationController.update);

routes.post('/files', upload.single('file'), FileController.store);

export default routes;
