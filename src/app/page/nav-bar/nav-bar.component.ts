import { RegisterForAdminComponent } from './../register/register-for-admin/register-for-admin.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
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
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

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

this.mService.GetTop3Moive().subscribe(e=>(
   this.data=e )
  ,
  er=>console.log(er))

  }
   logout() {
    this.router.navigateByUrl('/home');
    localStorage.removeItem('token');
    localStorage.removeItem('Role');
    localStorage.removeItem('User');
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

 openDialogForAdmin()
 {
  const dialogRef = this.dialog.open(RegisterForAdminComponent,
    {data: RegisterModel});

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
