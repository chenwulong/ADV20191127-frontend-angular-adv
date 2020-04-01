import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-dialog-usuarios-excluir',
  templateUrl: './dialog-usuarios-excluir.component.html',
  styleUrls: ['./dialog-usuarios-excluir.component.css']
}) // Component
export class DialogUsuariosExcluirComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              private dialogRef: MatDialogRef<DialogUsuariosExcluirComponent>) { }

  ngOnInit() {
  } // ngOnInit

  close(usuario) {
    this.dialogRef.close(usuario);
  } // close
} // DialogUsuariosExcluirComponent
