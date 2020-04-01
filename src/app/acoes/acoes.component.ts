import { Component, OnInit } from '@angular/core';
import { AcaoService } from '../acao.service';
import { MatDialog, MatSnackBar } from '@angular/material';
import { DialogAcoesComponent } from '../dialog-acoes/dialog-acoes.component';
import { DialogAcoesExcluirComponent } from '../dialog-acoes-excluir/dialog-acoes-excluir.component';

@Component({
  selector: 'app-acoes',
  templateUrl: './acoes.component.html',
  styleUrls: ['./acoes.component.css']
}) // Component
export class AcoesComponent implements OnInit {

  acoes = [];

  filtro = "";

  pager = {
    paginaAtual: 1,
    qtdPaginas: 10
  };
  
  constructor(private _acaoService: AcaoService,
              public dialog: MatDialog,
              public snackBar: MatSnackBar) { }
  ngOnInit() {
    /*this._acaoService.listar("", 1)
      .subscribe(
        res => {
          console.log("Listar ações");
          this.acoes = res.lisaAcao;
          this.pager.qtdPaginas = res.qtdPaginas;
        }, // res
        err => {
          console.log(err);
        } // err
      ) // listar*/

      this.filtrou("", 1);
  } // ngOnInit

  filtrou(newFiltro, numPagina) {
    this.filtro = typeof newFiltro === "undefined" ? "" : newFiltro;

    this._acaoService.listar(newFiltro, numPagina)
      .subscribe(
        res => {
          this.acoes = res.listaAcao;
          this.pager.qtdPaginas = res.qtdPaginas;

          console.log("filtrou: " + newFiltro);
        }, // res
        err => {
          console.log("Erro: " + err);

          this.snackBar.open("Ocorreu um problema, contate o suporte!", null, {
            duration: 2000,
            verticalPosition: 'top'
            //horizontalPosition: "right"
          }); // snackBar
        } // err
      ) // getAcoes
  } // filtrou

  excluir(item) {
    let dialofRef = this.dialog.open(DialogAcoesExcluirComponent, {data: {acao: item}});

    dialofRef.afterClosed().subscribe(result => {
      if (result != null) {
        this._acaoService.excluir(result)
        .subscribe(
          res => {            
            console.log("Excluiu Ação");
            this.snackBar.open("Registro excluido com sucesso!", null, {
              duration: 2000,
              verticalPosition: 'top'
              //panelClass: 'center'
            }); // snackbar

            this.ngOnInit();
          }, // excluir
          err => {
            console.log("Erro: " + err);

            this.snackBar.open("Ocorreu um problema, contate o suporte!", null, {
              duration: 2000,
              verticalPosition: 'top'
              //horizontalPosition: "right"
            }); // snackbar
          } // err
        ) // excluir
      } else {
        console.info("Cancelar exclusão");
      } // else result
    }); // afterClosed
  } // excluir

  editar(item) {
    //this._acaoService.listarClientes()
    //.subscribe(
      //res => {
/*
retirado cod
*/
      //}, // res
      //err => {
        //console.log(err);
      //} // err
    //); // listarClientes


////////////////// novo
//console.log("Listar clientes");
//this.options = res

    let dialofRef2 = this.dialog.open(DialogAcoesComponent, {data: {acao: item}});

    dialofRef2.afterClosed().subscribe(result => {
      if (result != null) {
        this._acaoService.salvar(result)
        .subscribe(
          res => {
            console.log("alterou: " + res);
            this.snackBar.open("Registro alterado com sucesso!", null, {
              duration: 2000,
              verticalPosition: 'top'
              //horizontalPosition: "right"
            }); // snackBar

            this.ngOnInit();
          }, // res
          err => {
            console.log("Erro: " + err);

            this.snackBar.open("Ocorreu um problema, contate o suporte!", null, {
              duration: 2000,
              verticalPosition: 'top'
              //horizontalPosition: "right"
            }); // snackBar
          } // err
        ) // salvar

        console.info("Realizar Alteração: " + result.numPasta);
      } else {
        console.info("Cancelar Alteração");
      } // else result
    }); // afterClosed
  } // editar

  novo() {
    let novoItem = {
      codAcao:0,
      codUsuarioAlteracao:null,
      codUsuarioInsercao:null,
      datAlteracao:null,
      datInsercao:null,
      numPasta:null,
      strAutor:null,
      strObservacao:null,
      strReu:null
    }; // novoItem

    //this._acaoService.listarClientes()
    //.subscribe(
      //res => {
/*
retirado daqui
*/
      //}, // res
      //err => {
        //console.log(err);
      //} // err
    //); // listarClientes

    console.log("Listar clientes");
    //this.options = res

    let dialofRef = this.dialog.open(DialogAcoesComponent, {data: {acao: novoItem}});

    dialofRef.afterClosed().subscribe(result => {
      if (result != null) {
        this._acaoService.salvar(result)
        .subscribe(
          res => {
            console.log("salvou: " + res);
            this.snackBar.open("Registro inserido com sucesso!", null, {
              duration: 2000,
              verticalPosition: 'top'
              //horizontalPosition: "right"
            }); // snackBar

            this.ngOnInit();
          }, // res
          err => {
            console.log("Erro: " + err);

            this.snackBar.open("Ocorreu um problema, contate o suporte!", null, {
              duration: 2000,
              verticalPosition: 'top'
              //horizontalPosition: "right"
            }); // snackBar
          } // err
        ) // salvar

        console.info("Realizar Inserção: " + result.numPasta);
      } else {
        console.info("Cancelar Inserção");
      } // else result
    }); // afterClosed

//
   /* let dialofRef = this.dialog.open(DialogAcoesComponent, {data: {acao: novoItem}});

    dialofRef.afterClosed().subscribe(result => {
      if (result != null) {
        this._acaoService.salvar(result)
        .subscribe(
          res => {
            console.log("salvou: " + res);
            this.snackBar.open("Registro inserido com sucesso!", null, {
              duration: 2000,
              verticalPosition: 'top'
              //horizontalPosition: "right"
            }); // snackBar

            this.ngOnInit();
          }, // res
          err => {
            console.log("Erro: " + err);

            this.snackBar.open("Ocorreu um problema, contate o suporte!", null, {
              duration: 2000,
              verticalPosition: 'top'
              //horizontalPosition: "right"
            }); // snackBar
          } // err
        ) // salvar

        console.info("Realizar Inserção: " + result.numPasta);
      } else {
        console.info("Cancelar Inserção");
      } // else result
    }); // afterClosed
    */
  } // novo

  navegarPagina(numPagina) {
    this.pager.paginaAtual = numPagina;

    console.info(this.filtro);

    this.filtrou(this.filtro, this.pager.paginaAtual);
  } // navegarPagina

  possuiAnterior() {
    return this.pager.paginaAtual > 1;
  } // possuiAnterior

  possuiPosterior() {
    return this.pager.paginaAtual < this.pager.qtdPaginas;
  } // possuiPosterior

  updateFiltro(newFiltro) {
    this.filtro = newFiltro;
  }

  pesquisar() {
    this.filtrou(this.filtro, 1);
  } // possuiPosterior
} // AcoesComponent
