import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';
import { map } from 'rxjs/internal/operators/map';
import { RegisterModel } from '../model/RegisterModel';
import { User } from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  logins:any;
  baseUrl="https://localhost:44385/api/User/"

  constructor(public http:HttpClient ,private fb: FormBuilder) { }


  getalluser(){
    return this.http.get<any[]>(this.baseUrl+"GetAllUsers")
  }


  register(formModel: any  ) {
    return this.http.post<User>( this.baseUrl+"Register" ,formModel).pipe(
      map((user: any) => {
        if (user) {
          this.logins='1'
          localStorage.setItem('token',this.logins );
          localStorage.setItem('Role',user.roleId );
          localStorage.setItem('User',user.id );
        }
      })
    );
  }

  registerForAdmin(formModel: any  ) {
    return this.http.post( this.baseUrl+"RegisterForAdmin" ,formModel).pipe(
      map((user: any) => {
        if (user) {
          this.logins='1'
          localStorage.setItem('token',this.logins );
        }
      })
    );
  }




  login(Logins: any) {
    return this.http.post<User>( this.baseUrl+'Login', Logins).pipe(
      map((user: any) => {
        if (user) {
          this.logins='1'
          localStorage.setItem('token',this.logins  );
          localStorage.setItem('Role',user.roleId );
          localStorage.setItem('User',user.id );

        }
      })
    );;
  }


  getUserProfile() {
    const token = localStorage.getItem("token");
    const header = new HttpHeaders  ({ 'Authorization': `Bearer ${token}` });
    const options = {
       headers: header,
    };
    return this.http.get(this.baseUrl + '/DataUser/profile', options );
  }
}
