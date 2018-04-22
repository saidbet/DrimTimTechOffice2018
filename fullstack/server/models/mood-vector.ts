import * as mongoose from 'mongoose';

const moodVectorSchema = new mongoose.Schema({
  collaborator: String,
  gender: String,
  timestamp: Number,
  angry: Number,
  disgust: Number,
  fear: Number,
  happy: Number,
  sad: Number,
  surprise: Number,
  neutral: Number
}, { collection: 'mood_vector' });

const MoodVector = mongoose.model('MoodSchema', moodVectorSchema);

export default MoodVector;
