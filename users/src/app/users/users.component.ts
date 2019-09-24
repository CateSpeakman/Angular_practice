import { Component, OnInit } from '@angular/core';

import { User } from './users.model';

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

  // executed when the Reset button is clicked
  onReset(): void {
    this.firstName = '';
    this.lastName = '';
    this.email = '';
    this.newUserAdded = false;
  }

  // executed when Add User is clicked
  onAddUser(): void {
   
    let obj = {firstName:this.firstName, lastName:this.lastName, email:this.email};
   
    this.users.push(obj);
    this.newUserAdded = true;
  }

  getColor(): string {
    return this.newUserAdded === true ? '#000080' : '#FF0000'; // navy : red
  }

  // Array to hold Mountain Objects
  users: User[] = [
    new User('Cate', 'Speakman', 'cate@cate.com'),
    new User('Jonathan', 'Speakman', 'jonathan@jonjon.com'),
    new User('Adam', 'Speakman', 'adam@adam.com'),
  ];

  constructor() { }

  ngOnInit() {
  }

}
