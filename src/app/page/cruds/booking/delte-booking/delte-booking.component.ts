import { BookingService } from './../../../../Service/booking.service';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HallsService } from 'src/app/Service/halls.service';

@Component({
  selector: 'app-delte-booking',
  templateUrl: './delte-booking.component.html',
  styleUrls: ['./delte-booking.component.scss']
})
export class DelteBookingComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DelteBookingComponent>,@Inject(MAT_DIALOG_DATA) public data: any, public dataService: BookingService) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  confirmDelete(): void {
    this.dataService.deleteBooking(this.data.row.id).subscribe(e=>{console.log(e)},er=>{console.log(er)});
    this.dialogRef.close();

  }
}
