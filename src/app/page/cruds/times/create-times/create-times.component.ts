import { TimesService } from './../../../../Service/times.service';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create-times',
  templateUrl: './create-times.component.html',
  styleUrls: ['./create-times.component.scss']
})
export class CreateTimesComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<CreateTimesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private toastr: ToastrService,public dataService: TimesService) { }

  ngOnInit(): void {
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
    this.dataService.addTimes(this.data)
    .subscribe(e=>{this.toastr.success("Created Success"),this.dialogRef.close() },er=>{this.toastr.error(" Faild On Create")});
    this.dialogRef.close();
  }

}
