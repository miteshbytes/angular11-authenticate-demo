import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { fullName, isAuthenticated } from './utility/authManager';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'authenticate-demo';

  constructor(public authService: AuthService) { }

  get isUserAuthenticated() {
    return isAuthenticated();
  }

  get userName() {
    return fullName();
  }
}
