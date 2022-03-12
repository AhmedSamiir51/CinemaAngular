import { BookingService } from './../../Service/booking.service';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/Service/user.service';
import { MoivesService } from 'src/app/Service/moives.service';
import { HallsService } from 'src/app/Service/halls.service';
import { TimesService } from 'src/app/Service/times.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<BookingComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, public dataService: BookingService,
     public UserService: UserService, public MoivesService: MoivesService,private toastr: ToastrService,
     public TimesService: TimesService, public HallsService: HallsService

     ) { }
    dataTimes:any
  ddd:any

  ngOnInit(): void {


    console.log(this.data)
    this.data.dayBooking=new Date()
    this.TimesService.GetAllTimes().subscribe(e=>this.dataTimes=e)
    this.HallsService.GetHallsFromIdMovie(this.data.movieId).subscribe(e=>{console.log(e,"a7aa"), this.ddd=e})

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


    this.data.userId=localStorage.getItem('User')
    this.data.hallsId=this.ddd.id


    console.log( this.data," this.data")
    this.dataService.addBooking(this.data)
    .subscribe(e=>{this.toastr.success("Booking Success") ,this.dialogRef.close()},
    er=>{this.toastr.error("Faild To Booking")});
    this.dialogRef.close();
  }
}
