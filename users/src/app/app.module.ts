import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AuthService } from './providers/auth.service'; 
import { LoginService } from './providers/login.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { UsersComponent } from './users/users.component';
import { LoginComponent } from './login/login.component';

const appRoutes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'users', component: UsersComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    UsersComponent,
    LoginComponent
  ],

  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AuthService,
  LoginService],

  bootstrap: [AppComponent]
})
export class AppModule { }
 
