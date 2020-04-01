import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
}) // Component
export class AppComponent {
  title = 'ngApp';

  constructor(public _authService: AuthService) { }
} // AppComponent
