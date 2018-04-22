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
  router.route('/moods/:collaborator').get(moodCtrl.getAllForOneCollaborator);
  router.route('/moods/:collaborator/hour').get(moodCtrl.getAllForOneCollaboratorHour);
  router.route('/moods/:collaborator/week').get(moodCtrl.getAllForOneCollaboratorWeek);
  router.route('/moods/:collaborator/month').get(moodCtrl.getAllForOneCollaboratorMonth);
  router.route('/moods/:collaborator/year').get(moodCtrl.getAllForOneCollaboratorYear);

  // Moods Vector
  router.route('/moodsvector').get(moodVectorCtrl.getAll);
  router.route('/moodsvector/:collaborator').get(moodVectorCtrl.getAllForOneCollaborator);
  router.route('/moodsvector/:collaborator/latest').get(moodVectorCtrl.getLatestForOneCollaborator);
  router.route('/moodsvector/:collaborator/hour').get(moodVectorCtrl.getAllForOneCollaboratorHour);
  router.route('/moodsvector/:collaborator/week').get(moodVectorCtrl.getAllForOneCollaboratorWeek);
  router.route('/moodsvector/:collaborator/month').get(moodVectorCtrl.getAllForOneCollaboratorWeek);
  router.route('/moodsvector/:collaborator/year').get(moodVectorCtrl.getAllForOneCollaborator);

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
