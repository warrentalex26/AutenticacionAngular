import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {

  constructor(private authService: AuthService) {
    authService.handleAuthentication();
  }

  ngOnInit() {
  }

  login() {
    this.authService.login();
  }

  salir() {
    this.authService.logout();
  }

}
