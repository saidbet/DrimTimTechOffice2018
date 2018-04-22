import * as mongoose from 'mongoose';

const moodSchema = new mongoose.Schema({
  collaborator: String,
  mood: String,
  gender: String,
  timestamp: Number
}, { collection: 'mood' });

const Mood = mongoose.model('MoodSchema', moodSchema);

export default Mood;
