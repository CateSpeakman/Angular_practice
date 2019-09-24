import { Injectable } from '@angular/core';

import { User } from '../users/users.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 users: User[] = [];

 constructor() { }
 
  addUser(firstName:string, lastName:string, email:string){
    this.users.push(new User(firstName, lastName, email));
    return this.users;
  }
}
