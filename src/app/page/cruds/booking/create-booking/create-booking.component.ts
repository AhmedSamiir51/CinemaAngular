import { BookingService } from './../../../../Service/booking.service';
import { TimesService } from './../../../../Service/times.service';
import { MoivesService } from './../../../../Service/moives.service';
import { UserService } from './../../../../Service/user.service';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Halls } from 'src/app/model/Halls';
import { HallsService } from 'src/app/Service/halls.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.scss']
})
export class CreateBookingComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<CreateBookingComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, public dataService: BookingService,
     public UserService: UserService, public MoivesService: MoivesService,private toastr: ToastrService,
     public TimesService: TimesService, public HallsService: HallsService

     ) { }

    dataUser:any
    dataMovies:any
    dataTimes:any
    dataHalls:any
  ngOnInit(): void {
    this.data.dayBooking=new Date()
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
    return this.formControl.hasError('required') ? 'Required field' :'';
  }

  submit() {
  // emppty stuff
  }
  onNoClick(): void {
    this.dialogRef.close();

  }
  public confirmAdd(): void {
    this.dataService.addBooking(this.data)
    .subscribe(e=>{this.toastr.success("Created Success") ,this.dialogRef.close()},
    er=>{this.toastr.error("Faild On Create")});
    this.dialogRef.close();
  }
}
