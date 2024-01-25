import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userNameAndPasswordList = new Map<string, string>([
    ['userName@test.de', 'hallo123'],
    ['example_user@test.de', 'secret'],
    ['dr_jones@ukw.de', 'geheim'],
    ['support123@test.de', 'jaja'],
    ['MacGyver@systhemis.de', 'sythemisag']
  ]);

  constructor(private http: HttpClient) {
  }

  login(value: { username: string, password: string }): Observable<any> {
    if(this.userNameAndPasswordList.has(value.username)) {
      if(this.userNameAndPasswordList.get(value.username) == value.password) {
        return of();
      }
    }
    return throwError({status: 401})
  }

  register(value: any): Observable<any> {
    this.userNameAndPasswordList.set(value.username, value.password)
    return of();
  }
}
