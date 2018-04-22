import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { MoodVector } from '../shared/models/mood-vector.model';



@Injectable()
export class MoodVectorService {

  constructor(private http: HttpClient) { }

  getMoods(): Observable<MoodVector[]> {
    return this.http.get<MoodVector[]>('/api/moodsvector');
  }


  getMoodsByCustomer(id: String): Observable<MoodVector[]> {
    return this.http.get<MoodVector[]>(`/api/moodsvector/${id}`);
  }


}
