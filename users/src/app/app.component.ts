import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'users';

  addNewUser: boolean = true;
    
  firstName: string = '';
  lastName: string = '';
  email: string = '';
}

