import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class IotService {

  constructor(private http: HttpClient) { }

  blameWorker(): Observable<any[]> {
    return this.http.get<any[]>('http://10.100.3.48/on/3');
  }

}
