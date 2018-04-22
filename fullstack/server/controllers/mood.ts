import BaseCtrl from './base';
import Mood from '../models/mood';


export default class MoodCtrl extends BaseCtrl {
  model = Mood;

  // Get all
  getAllForOneCustomer = (req, res) => {
    this.model.find({ _id: req.params.id }, req.body, (err) => {
      if (err) { return console.error(err); }
      res.status(200).json();
    });
  }
}
