import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
}) // Component
export class LoginComponent implements OnInit {

  env = environment;
  public loginUserData = {
    email: null,
    password: null
  }
  constructor(private _auth: AuthService,
              private _router: Router,
              public snackBar: MatSnackBar) { }

  ngOnInit() {
    localStorage.removeItem('token');
  } // ngOnInit

  loginUser() {
    //console.log(this.loginUserData)
    this._auth.loginUser(this.loginUserData)
      .subscribe(
        res => {
          console.log(res)
          localStorage.setItem('token', res.token)
          this._router.navigate(['acoes'])
        }, // res
        err => {
          console.log(err);

          this.snackBar.open("Acesso negado!", null, {
            duration: 2000,
            verticalPosition: 'top'
          }); // snackBar
        } // err
      ) // _auth
  } // loginUser

  recuperarSenha() {
    this._router.navigate(['recuperar-senha'])
  } // recuperarSenha
} // LoginComponent
