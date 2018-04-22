import * as moment from 'moment';
import BaseCtrl from './base';
import MoodVector from '../models/mood-vector';


export default class MoodVectorCtrl extends BaseCtrl {
  model = MoodVector;
}
