import * as express from 'express';

import UserCtrl from './controllers/user';
import MoodCtrl from './controllers/mood';
import MoodVectorCtrl from './controllers/mood-vector';


export default function setRoutes(app) {

  const router = express.Router();

  const moodCtrl = new MoodCtrl();
  const moodVectorCtrl = new MoodVectorCtrl();
  const userCtrl = new UserCtrl();

  // Moods
  router.route('/moods').get(moodCtrl.getAll);
  router.route('/moods/:id').get(moodCtrl.getAll);

  // Moods Vector
  router.route('/moodsvector').get(moodVectorCtrl.getAll);
  router.route('/moodsvector/:id').get(moodVectorCtrl.getAll);

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
