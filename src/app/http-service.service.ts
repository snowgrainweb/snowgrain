import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get('https://us-central1-test-project-7d5f1.cloudfunctions.net/date');
  }

}
