import { TimesService } from './../../../../Service/times.service';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-create-times',
  templateUrl: './create-times.component.html',
  styleUrls: ['./create-times.component.scss']
})
export class CreateTimesComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<CreateTimesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, public dataService: TimesService) { }

  ngOnInit(): void {
  }


  formControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  getErrorMessage() {
    return this.formControl.hasError('required') ? 'Required field' :
      this.formControl.hasError('email') ? 'Required field' :
        '';
  }

  submit() {
  // emppty stuff
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  public confirmAdd(): void {
    this.dataService.addTimes(this.data).subscribe(e=>{console.log(e) },er=>{console.log(er)});
    this.dialogRef.close();
  }

}
