import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-recuperar-senha',
  templateUrl: './recuperar-senha-email.component.html',
  styleUrls: ['./recuperar-senha-email.component.css']
}) // Component
export class RecuperarSenhaEmailComponent implements OnInit {

  strSenha: string;
  strSenhaConfirma: string;
  hashRecuperacao: string;

  constructor(private _auth: AuthService,
              private _router: Router,
              private route: ActivatedRoute,
              public snackBar: MatSnackBar) { }

  ngOnInit() {
    this.hashRecuperacao = this.route.snapshot.queryParamMap.get("token");
  } // ngOnInit

  voltarLogin() {
    this._router.navigate(['login'])
  } // voltarLogin

  confirmaSenha() {
    // TODO: post nova senha

    // TODO: armazena token

    // TODO: redirect ações

    if (this.strSenha != this.strSenhaConfirma) {
      this.snackBar.open("Preencha a senha corretamente!", null, {
        duration: 2000,
        verticalPosition: 'top'
      }); // snackBar
    } else {
      this._auth.confirmar(this.hashRecuperacao, this.strSenhaConfirma)
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
    } // else strSenhaConfirma
  } // confirmaSenha
} // RecuperarSenhaEmailComponent
