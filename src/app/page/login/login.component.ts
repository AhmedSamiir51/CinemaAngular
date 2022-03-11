import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LoginModel } from 'src/app/model/LoginModel';

import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { UserService } from 'src/app/Service/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<LoginComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private UserServices: UserService,private toastr: ToastrService,
    private formBuilder: FormBuilder
  ) {}
  model: LoginModel = new LoginModel();
  onNoClick(): void {
    this.dialogRef.close();
  }
  form!: FormGroup;

  FormControl = new FormControl('', [Validators.required]);

  onSubmit() {
    console.log(this.model);
    this.UserServices.login(this.model).subscribe(
      (data) => {
        window.location.reload();
        this.dialogRef.close();
        this.toastr.success("Login Success Welcome")

      },
      (err) => this.toastr.error("Falid To Login Check Pass Or Email")
    );
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: [
        '',
        {
          validators: [Validators.required],
        },
      ],
      password: [
        '',
        {
          validators: [Validators.required],
        },
      ],
    });

    if (this.model !== undefined) {
      this.form.patchValue(this.model);
    }
  }
}
