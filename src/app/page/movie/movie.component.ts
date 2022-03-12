import { Component, OnInit, Sanitizer } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginModel } from 'src/app/model/LoginModel';
import { RegisterModel } from 'src/app/model/RegisterModel';
import { MoivesService } from 'src/app/Service/moives.service';
import { UserService } from 'src/app/Service/user.service';
import { BookingComponent } from '../booking/booking.component';
import { LoginComponent } from '../login/login.component';
import { MoviesComponent } from '../movies/movies.component';
import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  data:any
  imageUrl:any

  constructor(private mService: MoivesService,private sanitizer:DomSanitizer,public dialog: MatDialog,public ar:ActivatedRoute)
  { }

  display:any
  ngOnInit(): void {
    localStorage.getItem('Role') ==null?this.display=true :this.display=false
  this.mService.GetMoiveById(this.ar.snapshot.params["id"]).subscribe
  (e=>(this.data=e ,  this.imageUrl =this.photoURL(this.data.traileUrl) ) ,
  er=>console.log(er)
)}

  photoURL(url:any) {
     return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }



  openDialogBooking(movieId : number){
  const dialogRef = this.dialog.open(BookingComponent  ,{
    data: {movieId:movieId }
  });

  dialogRef.afterClosed().subscribe();

}




}
