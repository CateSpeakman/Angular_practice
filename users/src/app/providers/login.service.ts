import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  // Hard-coded for demo purposes
  USER_NAME: string = 'Admin';
  PASSWORD: string = 'password';

  private usersEndpoint: string = 'http://localhost:3000/login/';
	private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  login(userName: string, password: string) : Observable<any> {
    return this.http.post(this.usersEndpoint, {user_name : userName, user_password : password}, this.httpOptions)
      .pipe(map(res => <any[]>res));
  }


  // login(userName: string, password: string) {
  //   if (userName === this.USER_NAME && password === this.PASSWORD) {
  //     console.log('LoginService: Login successful!');
  //     return true;
  //   } else {
  //     console.log('LoginService: Login failed!');
  //     return false;
  //   }
  // }
}