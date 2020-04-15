import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  constructor(private dialogRef: MatDialogRef<any>) {}

  closeDialog(): void {
    this.dialogRef.close();
  }

  ngOnInit() {}
}
