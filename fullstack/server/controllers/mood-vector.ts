import BaseCtrl from './base';
import MoodVector from '../models/mood-vector';


export default class MoodVectorCtrl extends BaseCtrl {
  model = MoodVector;

  // Get all
  getAllForOneCustomer = (req, res) => {
    this.model.find({ _id: req.params.id }, req.body, (err) => {
      if (err) { return console.error(err); }
      res.status(200).json();
    });
  }
}
