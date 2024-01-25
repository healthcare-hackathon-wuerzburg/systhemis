import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { HttpResponse, User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private loggedInUser: User | undefined = undefined;

  private knownUsers: User[] = [
    {
      username: 'username@test.de',
      password: 'hallo123',
      docter: false
    },
    {
      username: 'username@test.de',
      password: 'hallo123',
      docter: false
    },
    {
      username: 'example_user@test.de',
      password: 'secret',
      docter: false
    },
    {
      username: 'dr_jones@ukw.de',
      password: 'geheim',
      docter: true
    },
    {
      username: 'support123@test.de',
      password: 'jaja',
      docter: false
    },
    {
      username: 'macgyver@systhemis.de',
      password: 'systhemisag',
      docter: false
    },
  ];

  constructor(private http: HttpClient) {
  }

  isLoggedIn(): boolean {
    return this.loggedInUser !== undefined;
  }

  login(value: { username: string, password: string }): Observable<HttpResponse<User>> {
    const foundUser = this.knownUsers.find(e => e.username === value.username && e.password === value.password);

    if (foundUser) {
      localStorage.setItem('username', foundUser.username);
      this.loggedInUser = foundUser;
      return of({val: foundUser, status: 200});
    }
    return throwError(() => new Error('Unbekannte Zugangsdaten'));
  }

  register(value: { username: string, password: string }): Observable<any> {
    this.knownUsers = [...this.knownUsers, {...value, docter: false }];
    return of({});
  }
}
