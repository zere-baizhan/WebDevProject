import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  username = '';
  password = '';

  constructor(private router: Router) {}

  onLogin(): void {
    console.log('Login with', this.username, this.password);
    // Step 2: Replace this with AuthService later
  }
}

