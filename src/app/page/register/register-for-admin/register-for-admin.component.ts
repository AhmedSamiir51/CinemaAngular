import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { RegisterModel } from 'src/app/model/RegisterModel';
import { UserService } from 'src/app/Service/user.service';

@Component({
  selector: 'app-register-for-admin',
  templateUrl: './register-for-admin.component.html',
  styleUrls: ['./register-for-admin.component.scss']
})
export class RegisterForAdminComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<RegisterForAdminComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,private toastr: ToastrService,
    private UserService: UserService
  ) {}
  reg: RegisterModel = new RegisterModel();
  onNoClick(): void {
   }

  onSubmit() {
    console.log(this.reg);
     this.UserService.registerForAdmin(this.reg).subscribe(
      (data) => {
       this.toastr.success("Register Success")
        this.dialogRef.close();
      },
      (err) =>
      this.toastr.error("Faild in Register")

    );
  }

  ngOnInit(): void {}

}
