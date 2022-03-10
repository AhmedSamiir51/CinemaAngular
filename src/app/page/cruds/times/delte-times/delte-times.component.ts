import { TimesService } from './../../../../Service/times.service';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-delte-times',
  templateUrl: './delte-times.component.html',
  styleUrls: ['./delte-times.component.scss']
})
export class DelteTimesComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DelteTimesComponent>,@Inject(MAT_DIALOG_DATA) public data: any, public dataService: TimesService) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  confirmDelete(): void {
    this.dataService.deleteTimes(this.data.id).subscribe(e=>{console.log(e)},er=>{console.log(er)});
    this.dialogRef.close();

  }

}
