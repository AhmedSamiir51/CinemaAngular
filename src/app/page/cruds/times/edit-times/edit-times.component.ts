import { TimesService } from './../../../../Service/times.service';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-times',
  templateUrl: './edit-times.component.html',
  styleUrls: ['./edit-times.component.scss']
})
export class EditTimesComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<EditTimesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private toastr: ToastrService,public dataService: TimesService) { }

  ngOnInit(): void {
  }

  formControl = new FormControl('', [
    Validators.required
  ]);


  getErrorMessage() {
    return this.formControl.hasError('required') ? 'Required field' :
      this.formControl.hasError('email') ? 'Not a valid email' :
        '';
  }


  onNoClick(): void {
    this.dialogRef.close();
  }

  stopEdit(): void {
    this.dataService.editTimes(this.data)
    .subscribe((e) => {
      this.toastr.success("Updated Success"),this.dialogRef.close()
    },
    (er) => {
      this.toastr.error("Not Updated")
    }
  );
}
}
