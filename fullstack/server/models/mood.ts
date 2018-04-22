import * as mongoose from 'mongoose';

const moodSchema = new mongoose.Schema({
  timeStamp: Date,
  image: String
}, { collection: 'mood' });

const Mood = mongoose.model('MoodSchema', moodSchema);

export default Mood;
