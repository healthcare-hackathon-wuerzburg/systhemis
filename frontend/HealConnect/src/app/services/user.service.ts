import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { HttpResponse, Registration, UserType } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private loggedInUser: Registration | undefined = undefined;

  private knownUsers: Registration[] = [
    {
      username: 'username@test.de',
      password: 'hallo123',
      birthdate: "1965-02-15T23:00:00.000Z",
      cancerPosition: "1",
      cancerSituation: "2",
      confirmPassword:"test",
      email: "username@test.de",
      firstname: "username",
      gender: "male",
      infrared: false,
      medicin: false,
      operation: true,
      other: false,
      secondname: "test",
      userType: UserType.Patient,
    },
    {
      username: 'example_user@test.de',
      password: 'secret',
      birthdate: "1970-06-03T23:00:00.000Z",
      cancerPosition: "1",
      cancerSituation: "2",
      confirmPassword:"secret",
      email: "example_user@test.de",
      firstname: "Diana",
      gender: "female",
      infrared: false,
      medicin: false,
      operation: true,
      other: false,
      secondname: "Tester",
      userType: UserType.Patient,
    },
    {
      username: 'dr_jones@ukw.de',
      password: 'geheim',
      birthdate: "1955-09-03T23:00:00.000Z",
      cancerPosition: "1",
      cancerSituation: "2",
      confirmPassword:"geheim",
      email: "dr_jones@ukw.de",
      firstname: "Indiana",
      gender: "male",
      infrared: false,
      medicin: false,
      operation: true,
      other: false,
      secondname: "Jones",
      userType: UserType.Arzt,
    },
    {
      username: 'macgyver@systhemis.de',
      password: 'systhemisag',
      birthdate: "1955-09-03T23:00:00.000Z",
      cancerPosition: "1",
      cancerSituation: "2",
      confirmPassword:"systhemisag",
      email: "macgyver@systhemis.de",
      firstname: "Armand",
      gender: "male",
      infrared: false,
      medicin: false,
      operation: true,
      other: false,
      secondname: "MacGyver",
      userType: UserType.Arzt,
    },
  ];

  private registrations: Registration[] = [];

  constructor(private http: HttpClient) {
    const lsRegistrations = localStorage.getItem("registrations");
    if (lsRegistrations) {
      this.registrations = JSON.parse(lsRegistrations);
    }
    if (this.registrations) {
      this.registrations = [...this.registrations, ...this.knownUsers];
    }
  }

  isLoggedIn(): boolean {
    return this.loggedInUser !== undefined;
  }

  login(value: { username: string, password: string }): Observable<HttpResponse<Registration>> {
    const foundRegistration = this.registrations.find(entry => entry.email === value.username && entry.password === value.password);

    if (foundRegistration) {
      localStorage.setItem('username', foundRegistration.username);
      this.loggedInUser = foundRegistration;
      return of({val: foundRegistration, status: 200});
    }
    return throwError(() => new Error('Unbekannte Zugangsdaten'));
  }

  register(value: Registration): Observable<any> {
    this.registrations = [...this.registrations, value];
    localStorage.setItem("registrations", JSON.stringify(this.registrations));
    return of({});
  }
}
