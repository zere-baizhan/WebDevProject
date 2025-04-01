import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  username = '';
  email = '';
  password = '';

  constructor() {}

  onRegister() {
    console.log('Registering:', {
      username: this.username,
      email: this.email,
      password: this.password,
    });
    // Later: send to backend via AuthService
  }
}

