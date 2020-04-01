import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
}) // Injectable
export class AuthService {

  // private _apiUsuarioUrl = environment.apiprotocol + "://" + environment.apiserver + ":" + environment.apiport + "/api/usuario";
  private _apiUsuarioUrl = window["cfgApiBaseUrl"] + "/usuario";
  private _registerUrl   = this._apiUsuarioUrl + "/register";
  private _loginUrl      = this._apiUsuarioUrl + "/login";
  private _recuperarUrl  = this._apiUsuarioUrl + "/resetar-senha";
  private _confirmarUrl  = this._apiUsuarioUrl + "/confirmar-senha";

  constructor(private http: HttpClient,
              private _router: Router) { }

  registerUser(user) {
    return this.http.post<any>(this._registerUrl, user)
  } // registerUser

  loginUser(user) {
    return this.http.post<any>(this._loginUrl, {}, {
      params: {
        login: user.email,
        senha: user.password
      } // params
    }); // post
  } // loginUser

  recuperar(strLogin) {
    return this.http.post<any>(this._recuperarUrl, {}, {
      params: {
        login: strLogin
      }
    })
  } // recuperar

  confirmar(hashRecuperacao, strNovaSenha) {
    return this.http.post<any>(this._confirmarUrl, {}, {
      params: {
        token: hashRecuperacao,
        senha: strNovaSenha
      }
    })
  } // recuperar

  loggedIn() {
    return !!localStorage.getItem('token')
  } // loggedIn

  logoutUser() {
    localStorage.removeItem('token')
    this._router.navigate(['/login'])
  } // logoutUser

  getToken() {
    return localStorage.getItem('token')
  } // getToken
} // AuthService
