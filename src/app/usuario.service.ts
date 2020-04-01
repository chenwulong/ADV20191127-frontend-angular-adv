import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
}) // Injectable
export class UsuarioService {

  //private _apiUsuarioUrl = environment.apiprotocol + "://" + environment.apiserver + ":" + environment.apiport + "/api/usuario";
  private _apiUsuarioUrl = window["cfgApiBaseUrl"] + "/usuario";

  constructor(private http: HttpClient) { }

  listar(strFiltro) {
    return this.http.get<any>(this._apiUsuarioUrl + "/listar", {
      params: {
        filtro: strFiltro
      } // params
    }) // get
  } // listar

  salvar(novoUsuario) {
    return this.http.post<any>(this._apiUsuarioUrl + "/salvar", novoUsuario);
  } // salvar

  excluir(acao) {
    return this.http.post<any>(this._apiUsuarioUrl + "/excluir", acao)
  } // excluir
} // UsuarioService
