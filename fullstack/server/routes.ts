import * as express from 'express';

import UserCtrl from './controllers/user';
import WorkerCtrl from './controllers/worker';


export default function setRoutes(app) {

  const router = express.Router();

  const workerCtrl = new WorkerCtrl();
  const userCtrl = new UserCtrl();

  // Workers
  router.route('/workers').get(workerCtrl.getAll);
  router.route('/workers/count').get(workerCtrl.count);
  router.route('/worker').post(workerCtrl.insert);
  router.route('/worker/:id').get(workerCtrl.get);
  router.route('/worker/:id').put(workerCtrl.update);
  router.route('/worker/:id').delete(workerCtrl.delete);

  // Users
  router.route('/login').post(userCtrl.login);
  router.route('/users').get(userCtrl.getAll);
  router.route('/users/count').get(userCtrl.count);
  router.route('/user').post(userCtrl.insert);
  router.route('/user/:id').get(userCtrl.get);
  router.route('/user/:id').put(userCtrl.update);
  router.route('/user/:id').delete(userCtrl.delete);

  // Apply the routes to our appliworkerion with the prefix /api
  app.use('/api', router);

}
