import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { AcaoService } from '../acao.service';

// autocomplete server
import { HttpClient } from '@angular/common/http';
import { debounceTime, tap, switchMap, finalize } from 'rxjs/operators';

@Component({
  selector: 'app-dialog-acoes',
  templateUrl: './dialog-acoes.component.html',
  styleUrls: ['./dialog-acoes.component.css']
}) // Component
export class DialogAcoesComponent implements OnInit {
  // autocomplete
  searchMoviesCtrl  = new FormControl();
  searchMoviesCtrl2 = new FormControl();
  filteredItens : any;
  filteredItens2: any;
  isLoading  = false;
  isLoading2 = false;
  errorMsg : string;
  errorMsg2: string;

  dadosAcao: any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              private dialogRef: MatDialogRef<DialogAcoesComponent>,
              private http: HttpClient) { }

  /*displayFn(subject) {
    return subject ? subject.name : undefined;
  } // displayFn
*/
  ngOnInit() {
    console.info("Autor: " + this.data.acao.strAutor + ", Reu: " + this.data.acao.strReu);

    this.filteredItens  = [this.data.acao.strAutor];
    this.filteredItens2 = [this.data.acao.strReu];

    this.dadosAcao = JSON.parse(JSON.stringify(this.data.acao));

    /*this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );

      this.filteredOptions2 = this.myControl2.valueChanges
      .pipe(
        startWith(''),
        map(value2 => this._filter(value2))
      );
*/

      // autocomplete autor
      this.searchMoviesCtrl.valueChanges
      .pipe(
        debounceTime(500),
        tap(() => {
          this.errorMsg = "";
          this.filteredItens = [];
          this.isLoading = true;
        }),
        switchMap(value => this.http.get("http://api.adv.com.br:3001/api/acao/listar-clientes?nomeCliente=" + value)
          .pipe(
            finalize(() => {
              this.isLoading = false
            }),
          )
        )
      )
      .subscribe(data => {
        if (data == undefined) {
          console.error("errou! " + JSON.stringify(data));
          this.errorMsg = data['Error'];
          this.filteredItens = [];
        } else {
          console.info("acertou!");
          this.errorMsg = "";
          this.filteredItens = data;
        }
 
        console.log(this.filteredItens);
      });

      // autocomplete réu
      this.searchMoviesCtrl2.valueChanges
      .pipe(
        debounceTime(500),
        tap(() => {
          this.errorMsg2 = "";
          this.filteredItens2 = [];
          this.isLoading2 = true;
        }),
        switchMap(value2 => this.http.get("http://api.adv.com.br:3001/api/acao/listar-clientes?nomeCliente=" + value2)
          .pipe(
            finalize(() => {
              this.isLoading2 = false
            }),
          )
        )
      )
      .subscribe(data2 => {
        if (data2 == undefined) {
          console.error("errou! " + JSON.stringify(data2));
          this.errorMsg2 = data2['Error'];
          this.filteredItens2 = [];
        } else {
          console.info("acertou!");
          this.errorMsg2 = "";
          this.filteredItens = data2;
        }
 
        console.log(this.filteredItens2);
      });
  } // ngOnInit

  /*
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  } // _filter

  private _filter2(value2: string): string[] {
    const filterValue2 = value2.toLowerCase();
    return this.options2.filter(option2 => option2.toLowerCase().includes(filterValue2));
  } // _filter2
*/
  close(acao) {
    this.dialogRef.close(acao);
  } // close

  /*myControl = new FormControl();
  options: string[] = this.data.listaClientes;
  filteredOptions: Observable<string[]>;

  myControl2 = new FormControl();
  options2: string[] =['op1','op2'];
  filteredOptions2: Observable<string[]>;*/
} // DialogAcoesComponent
