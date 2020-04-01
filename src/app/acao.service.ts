import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
}) // Injectable
export class AcaoService {

  //private _apiAcaoUrl = environment.apiprotocol + "://" + environment.apiserver + ":" + environment.apiport + "/api/acao";
  private _apiAcaoUrl = window["cfgApiBaseUrl"] + "/acao";

  private _specialEventsUrl = "http://localhost:3000/api/usuario/listar";

  constructor(private http: HttpClient) { }

  listar(strFiltro, numPagina) {
    return this.http.get<any>(this._apiAcaoUrl + "/listar", {
      params: {
        filtro: strFiltro,
        numPagina: numPagina
      } // params
    }) // get
  } // listar

  listarClientes() {
    return this.http.get<any>(this._apiAcaoUrl + "/listar-clientes");
  } // listar

  salvar(novaAcao) {
    return this.http.post<any>(this._apiAcaoUrl + "/salvar", novaAcao);
  } // salvar

  excluir(acao) {
    return this.http.post<any>(this._apiAcaoUrl + "/excluir", acao)
  } // excluir

  getSpecialEvents() {
    return this.http.get<any>(this._specialEventsUrl)
  } // getSpecialEvents
} // EventService
