import { RegisterModel } from './../../model/RegisterModel';
import { UserService } from 'src/app/Service/user.service';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<RegisterComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,private toastr: ToastrService,
    private UserService: UserService
  ) {}
  reg: RegisterModel = new RegisterModel();
  onNoClick(): void {
   }

  onSubmit() {
    console.log(this.reg);
     this.UserService.register(this.reg).subscribe(
      (data) => {
        window.location.reload();
        this.dialogRef.close();
        this.toastr.success("Register Success")

      },
      (err) => this.toastr.error("Faild in Register")


    );
  }

  ngOnInit(): void {}
}
