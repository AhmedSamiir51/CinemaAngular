import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BookingService } from './../../../../Service/booking.service';
import { TimesService } from './../../../../Service/times.service';
import { MoivesService } from './../../../../Service/moives.service';
import { UserService } from './../../../../Service/user.service';
import { HallsService } from 'src/app/Service/halls.service';

@Component({
  selector: 'app-edit-booking',
  templateUrl: './edit-booking.component.html',
  styleUrls: ['./edit-booking.component.scss']
})
export class EditBookingComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<EditBookingComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, public dataService: BookingService,
     public UserService: UserService, public MoivesService: MoivesService,
     public TimesService: TimesService, public HallsService: HallsService

     ) { }

    dataUser:any
    dataMovies:any
    dataTimes:any
    dataHalls:any
    ssss?:Date
    ahmed:any
    date = new FormControl( this.data.row.dayBooking);
  ngOnInit(): void {
    this.ahmed=this.data.row.dayBooking
    console.log(this.data.row,"Ssssssssssss")
    this.data.dayBooking=this.ssss?.getDate()
    this.UserService.getalluser().subscribe(e=>this.dataUser=e)
    this.MoivesService.GetTop3Moive().subscribe(e=>this.dataMovies=e)
    this.TimesService.GetAllTimes().subscribe(e=>this.dataTimes=e)
    this.HallsService.GetHalls().subscribe(e=>this.dataHalls=e)
  }


  formControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  getErrorMessage() {
    return this.formControl.hasError('required') ? 'Required field' :
      this.formControl.hasError('email') ? 'Required field' :
        '';
  }

  submit() {
  // emppty stuff
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  public confirmAdd(): void {
    this.dataService.editBooking(this.data.row).subscribe(e=>{console.log(e ,"aaaaa") ,this.dialogRef.close(); },er=>{console.log(er)});

  }
}
