import * as moment from 'moment';
abstract class BaseCtrl {

  abstract model: any;

  // Get all
  getAll = (req, res) => {
    this.model.find({}, (err, docs) => {
      if (err) { return console.error(err); }
      res.status(200).json(docs);
    });
  }

  // Get all for one collaborator
  getAllForOneCollaborator = (req, res) => {
    this.model.find({ collaborator: req.params.collaborator }, req.body, (err, data) => {
      if (err) { return console.error(err); }
      res.status(200).json(data);
    });
  }

  getLatestForOneCollaborator = (req, res) => {
    const weekAgo = moment().subtract(1, 'hour').format('X');
    this.model.find({ collaborator: req.params.collaborator, timestamp: { $gte: weekAgo } }).
      limit(1).
      sort({ timestamp: -1 }).
      exec(req.body, (err, data) => {
        if (err) { return console.error(err); }
        res.status(200).json(data);
      });
  }


  getAllForOneCollaboratorHour = (req, res) => {
    const weekAgo = moment().subtract(1, 'hour').format('X');
    this.model.find({ collaborator: req.params.collaborator, timestamp: { $gte: weekAgo } }).
      limit(500).
      sort({ timestamp: -1 }).
      exec(req.body, (err, data) => {
        if (err) { return console.error(err); }
        res.status(200).json(data);
      });
  }

  getAllForOneCollaboratorWeek = (req, res) => {
    const weekAgo = moment().subtract(7, 'days').format('X');
    this.model.find({ collaborator: req.params.collaborator, timestamp: { $gte: weekAgo } }).
      limit(500).
      sort({ timestamp: -1 }).
      exec(req.body, (err, data) => {
        if (err) { return console.error(err); }
        res.status(200).json(data);
      });
  }

  getAllForOneCollaboratorMonth = (req, res) => {
    const weekAgo = moment().subtract(1, 'month').format('X');
    this.model.find({ collaborator: req.params.collaborator, timestamp: { $gte: weekAgo } }).
      limit(500).
      sort({ timestamp: -1 }).
      exec(req.body, (err, data) => {
        if (err) { return console.error(err); }
        res.status(200).json(data);
      });
  }

  getAllForOneCollaboratorYear = (req, res) => {
    const weekAgo = moment().subtract(1, 'year').format('X');
    this.model.find({ collaborator: req.params.collaborator, timestamp: { $gte: weekAgo } }).
      limit(500).
      sort({ timestamp: -1 }).
      exec(req.body, (err, data) => {
        if (err) { return console.error(err); }
        res.status(200).json(data);
      });
  }

  // Count all
  count = (req, res) => {
    this.model.count((err, count) => {
      if (err) { return console.error(err); }
      res.status(200).json(count);
    });
  }

  // Insert
  insert = (req, res) => {
    const obj = new this.model(req.body);
    obj.save((err, item) => {
      // 11000 is the code for duplicate key error
      if (err && err.code === 11000) {
        res.sendStatus(400);
      }
      if (err) {
        return console.error(err);
      }
      res.status(200).json(item);
    });
  }

  // Get by id
  get = (req, res) => {
    this.model.findOne({ _id: req.params.id }, (err, item) => {
      if (err) { return console.error(err); }
      res.status(200).json(item);
    });
  }

  // Update by id
  update = (req, res) => {
    this.model.findOneAndUpdate({ _id: req.params.id }, req.body, (err) => {
      if (err) { return console.error(err); }
      res.sendStatus(200);
    });
  }

  // Delete by id
  delete = (req, res) => {
    this.model.findOneAndRemove({ _id: req.params.id }, (err) => {
      if (err) { return console.error(err); }
      res.sendStatus(200);
    });
  }
}

export default BaseCtrl;
