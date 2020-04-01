import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material';

import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-recuperar-senha',
  templateUrl: './recuperar-senha.component.html',
  styleUrls: ['./recuperar-senha.component.css']
}) // Component
export class RecuperarSenhaComponent implements OnInit {

  hashRecuperacao: string;
  loginUserData = {}
  strEmail: string;
  aguardando = false;

  constructor(private _auth: AuthService,
              private _router: Router,
              private route: ActivatedRoute,
              public snackBar: MatSnackBar) { }

  ngOnInit() {
    this.hashRecuperacao = this.route.snapshot.queryParamMap.get("id")
    console.info(this.hashRecuperacao);

    this.route.queryParamMap.subscribe(queryParams => {
      this.hashRecuperacao = queryParams.get("id")
      console.info(this.hashRecuperacao);
    })
  } // ngOnInit

  
  telaEmail() {
    this._auth.recuperar(this.loginUserData)
      .subscribe(
        res => {
          console.log(res)
          this._router.navigate(['email'])
        }, // res
        err => console.log(err)
      ) // recuperar
  } // telaEmail

  enviarEmail() {
    this.aguardando = true;
    
    this._auth.recuperar(this.strEmail)
      .subscribe(
        res => {
          this.aguardando = false;
          console.log(res)

          this.snackBar.open("Foi enviado um e-mail para recuperação de senha!", null, {
            duration: 10000,
            verticalPosition: 'top'
          }); // snackBar
        }, // res
        err => {
          this.aguardando = false;
          console.log(err);

          if (err.status == 200) {
            this.snackBar.open("Foi enviado um e-mail para recuperação de senha!", null, {
              duration: 10000,
              verticalPosition: 'top'
            }); // snackBar
          } else {
            this.snackBar.open("Falha ao enviar e-mail de recuperação de senha!", null, {
              duration: 2000,
              verticalPosition: 'top'
            }); // snackBar
          }
        } // err
      ) // _auth
  } // enviarEmail
} // LoginComponent
