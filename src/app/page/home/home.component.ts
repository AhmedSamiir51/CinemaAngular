import { BookingComponent } from './../booking/booking.component';
import { MoivesService } from './../../Service/moives.service';
import { MoviesComponent } from './../movies/movies.component';
import { LoginComponent } from './../login/login.component';
import { RegisterModel } from './../../model/RegisterModel';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/Service/user.service';
import { RegisterComponent } from '../register/register.component';
import { LoginModel } from 'src/app/model/LoginModel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  login:any
  out:any
  admin:any
  data:any


  constructor(private router: Router,public serves: UserService,private toastr: ToastrService,private mService: MoivesService,public dialog: MatDialog)
  {

  }


  ngOnInit(): void {
    if (localStorage.getItem('token')=='1') {
      this.login=true
      this.out=false
    }else{
      this.login=false
      this.out=true
    }

    if (localStorage.getItem('Role')=='2') {
      this.admin=false
    }else{
      this.admin=true
    }

  this.mService.GetTop3Moive().subscribe( e =>(
    console.log(e ,"eeeeeeeeeeeeee") ,
    this.data = e,
    this.data.photoData = `https://localhost:44385/` + this.data.photoData
    , console.log(this.data))
    ,
    er=>console.log(er))
  }


   //LogOut
   logout() {
    this.router.navigateByUrl('/home');

    localStorage.removeItem('token');
    window.location.reload();

  }

  openDialog()
  {
   const dialogRef = this.dialog.open(RegisterComponent,
     {data: RegisterModel});

   dialogRef.afterClosed().subscribe( data=>

    console.log(data,"Login")

   );

 }
 openDialogInsertMovies()
 {
  const dialogRef = this.dialog.open(MoviesComponent ,{data: RegisterModel});

  dialogRef.afterClosed().subscribe( data=>

   console.log(data,"Login")

  );

}


openDialogBooking(){
  const dialogRef = this.dialog.open(BookingComponent  );

  dialogRef.afterClosed().subscribe();

}

 openDialogToLogin()
 {
  const dialogRef = this.dialog.open(LoginComponent,
    {data: LoginModel});

  dialogRef.afterClosed().subscribe( );

}




}
