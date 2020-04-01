import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { MatDialog, MatSnackBar } from '@angular/material';
import { DialogUsuariosComponent } from '../dialog-usuarios/dialog-usuarios.component';
import { DialogUsuariosExcluirComponent } from '../dialog-usuarios-excluir/dialog-usuarios-excluir.component';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
}) // Component
export class UsuariosComponent implements OnInit {

  usuarios = [];

  filtro: string;
  
  constructor(private _usuarioService: UsuarioService,
              public dialog: MatDialog,
              public snackBar: MatSnackBar) { }

  ngOnInit() {
    this._usuarioService.listar("")
      .subscribe(
        res => this.usuarios = res,
        err => console.log(err)
      ) // listar
  } // ngOnInit

  filtrou(newFiltro) {
    this._usuarioService.listar(newFiltro)
      .subscribe(
        res => {
          this.usuarios = res;
          
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
      ) // listar
  } // filtrou

  excluir(item) {
    let dialofRef = this.dialog.open(DialogUsuariosExcluirComponent, {data: {usuario: item}});

    dialofRef.afterClosed().subscribe(result => {
      if (result != null) {
        this._usuarioService.excluir(result)
        .subscribe(
          res => {            
            console.log("excluiu: " + JSON.stringify(res));
            this.snackBar.open("Registro excluido com sucesso!", null, {
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
        ) // excluir
      } else {
        console.info("Cancelar exclusão");
      } // else result
    }); // afterClosed
  } // excluir

  editar(item) {
    let dialofRef2 = this.dialog.open(DialogUsuariosComponent, {data: {usuario: item}});

    dialofRef2.afterClosed().subscribe(result => {
      if (result != null) {
        this._usuarioService.salvar(result)
        .subscribe(
          res => {            
            this.snackBar.open("Registro alterado com sucesso!", null, {
              duration: 2000,
              verticalPosition: 'top'
              //horizontalPosition: "right"
            }); // snackBar

            console.info("Realizar Alteração: " + JSON.stringify(res));

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
      } else {
        console.info("Cancelar Alteração");
      } // else result
    }); // afterClosed
  }

  novo() {
    let novoItem = {
      codUsuario: 0,
      strLogin: null,
      strSenha: null,
      strTokenReset: null
    }; // novoItem

    let dialofRef = this.dialog.open(DialogUsuariosComponent, {data: {usuario: novoItem}});

    dialofRef.afterClosed().subscribe(result => {
      if (result != null) {
        this._usuarioService.salvar(result)
        .subscribe(
          res => {
            console.log("salvou: " + JSON.stringify(res));
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
      } else {
        console.info("Cancelar Inserção");
      } // else result
    }); // afterClosed
  } // novo
} // UsuariosComponent
