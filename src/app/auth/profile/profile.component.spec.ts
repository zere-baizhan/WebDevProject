import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user = {
    username: 'nuray_user',
    email: 'nuray@example.com',
    bio: 'Aspiring web developer ✨'
  };

  constructor() {}

  ngOnInit(): void {
    // Later: load real user info from AuthService
  }

  logout() {
    localStorage.removeItem('access');
    localStorage.removeItem('refresh');
    // Later we’ll store tokens here
  }
}
