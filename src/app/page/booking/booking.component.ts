import { BookingService } from './../../Service/booking.service';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<BookingComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any  ,private service :BookingService
  ) { }

  Times:any
  Halls:any
  ngOnInit(): void {
    // this.service.getAllHalls().subscribe(e=>this.Halls=e)
    // this.service.getAllTimes().subscribe(e=>this.Times=e)
  }
  onSubmit() {
 }
}
