import { Component, OnInit } from '@angular/core';
import { AuthServices } from '../services/auth.services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent implements OnInit {

  authStatus!: boolean;

  constructor(private authServices: AuthServices, private router: Router) { }
  ngOnInit(): void {
    this.authStatus = this.authServices.isAuth;
  }

  onSignIn() {
    this.authServices.signIn()

    this.authStatus = this.authServices.isAuth;
    this.router.navigate(['chiens']);
  }
  ;

  onSignOut() {
    this.authServices.signOut();
    this.authStatus = this.authServices.isAuth;
  }
}
