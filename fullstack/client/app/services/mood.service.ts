import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Mood } from '../shared/models/mood.model';



@Injectable()
export class MoodService {

  constructor(private http: HttpClient) { }

  getMoods(): Observable<Mood[]> {
    return this.http.get<Mood[]>('/api/moods');
  }


  getMoodsByCustomer(id: String): Observable<Mood[]> {
    return this.http.get<Mood[]>(`/api/moods/${id}`);
  }


}
