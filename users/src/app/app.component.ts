import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Add User';

  addNewUser: boolean = false;

  firstName: string = '';
  lastName: string = '';
  email: string = '';

  newUserAdded: boolean = false;

  users: Array<object> = [];

  // executed when the Reset button is clicked
  onReset(): void {
    this.firstName = '';
    this.lastName = '';
    this.email = '';
    this.newUserAdded = false;
  }

  // executed when Add User is clicked
  onAddUser(): void {
    this.users.push(`${this.firstName} - ${this.lastName} ${this.email}`);
    this.newUserAdded = true;
  }

  getColor(): string {
    return this.newUserAdded === true ? '#000080' : '#FF0000'; // navy : red
  }


}