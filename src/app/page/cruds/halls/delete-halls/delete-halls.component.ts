import { HallsService } from './../../../../Service/halls.service';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-halls',
  templateUrl: './delete-halls.component.html',
  styleUrls: ['./delete-halls.component.scss']
})
export class DeleteHallsComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DeleteHallsComponent>,@Inject(MAT_DIALOG_DATA) public data: any, public dataService: HallsService) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  confirmDelete(): void {
    this.dataService.deleteHalls(this.data.id).subscribe(e=>{console.log(e)},er=>{console.log(er)});
    this.dialogRef.close();

  }
}
