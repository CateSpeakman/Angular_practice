import { Component, OnInit } from '@angular/core';

import { User } from './users.model';

import { AuthService } from './../providers/auth.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  title = 'Add User';

  addNewUser: boolean = false;

  firstName: string = '';
  lastName: string = '';
  email: string = '';

  newUserAdded: boolean = false;



// Array to hold User Objects
users: User[] = [];

constructor(private authService: AuthService) { }


  // executed when the Reset button is clicked
  onReset(): void {
    this.firstName = '';
    this.lastName = '';
    this.email = '';
    this.newUserAdded = false;
  }

  // executed when Add User is clicked
  onAddUser(): void {

    this.users = this.authService.addUser(this.firstName, this.lastName, this.email);
    this.newUserAdded = true;
  }

  getColor(): string {
    return this.newUserAdded === true ? '#000080' : '#FF0000'; // navy : red
  }

  
  ngOnInit() {
  }

}
