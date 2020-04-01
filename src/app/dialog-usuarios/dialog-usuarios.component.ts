import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-dialog-usuarios',
  templateUrl: './dialog-usuarios.component.html',
  styleUrls: ['./dialog-usuarios.component.css']
})
export class DialogUsuariosComponent implements OnInit {

  dadosUsuario: any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              private dialogRef: MatDialogRef<DialogUsuariosComponent>) { }

  ngOnInit() {
    this.dadosUsuario = JSON.parse(JSON.stringify(this.data.usuario));
  } // ngOnInit

  close(usuario) {
    this.dialogRef.close(usuario);
  } // close
} // DialogUsuariosComponent
