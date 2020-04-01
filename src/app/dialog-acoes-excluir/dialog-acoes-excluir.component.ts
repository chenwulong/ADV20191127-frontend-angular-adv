import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-dialog-acoes-excluir',
  templateUrl: './dialog-acoes-excluir.component.html',
  styleUrls: ['./dialog-acoes-excluir.component.css']
}) // Component
export class DialogAcoesExcluirComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              private dialogRef: MatDialogRef<DialogAcoesExcluirComponent>) { }

  ngOnInit() {
  } // ngOnInit

  close(acao) {
    this.dialogRef.close(acao);
  } // close
} // DialogAcoesExcluirComponent
