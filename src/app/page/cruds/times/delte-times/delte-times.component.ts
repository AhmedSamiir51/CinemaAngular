import { TimesService } from './../../../../Service/times.service';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-delte-times',
  templateUrl: './delte-times.component.html',
  styleUrls: ['./delte-times.component.scss']
})
export class DelteTimesComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DelteTimesComponent>,private toastr: ToastrService,@Inject(MAT_DIALOG_DATA) public data: any, public dataService: TimesService) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  confirmDelete(): void {
    this.dataService.deleteTimes(this.data.id).subscribe
    (e=>{this.toastr.success("Deleted Success") ,this.dialogRef.close()},er=>{this.toastr.error("Not Deleted")});
    this.dialogRef.close();

  }

}
