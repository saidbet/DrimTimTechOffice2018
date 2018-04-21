import * as mongoose from 'mongoose';

const streamCaptureSchema = new mongoose.Schema({
  timeStamp: Date,
  image: String
});

const StreamCapture = mongoose.model('StreamCaptureSchema', streamCaptureSchema);

export default StreamCapture;
