import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

  @Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  login(value: any): Observable<any> {
    console.log('/api/patientlogin');
    return this.http.post('/api/patientlogin', value);
  }
}
