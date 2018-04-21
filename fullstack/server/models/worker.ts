import * as mongoose from 'mongoose';

const workerSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
});

const Worker = mongoose.model('Worker', workerSchema);

export default Worker;
