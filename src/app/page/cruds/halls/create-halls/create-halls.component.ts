import { HallsService } from './../../../../Service/halls.service';
import { Halls } from './../../../../model/Halls';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-create-halls',
  templateUrl: './create-halls.component.html',
  styleUrls: ['./create-halls.component.scss']
})
export class CreateHallsComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<CreateHallsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Halls, public dataService: HallsService) { }

  ngOnInit(): void {
  }


  formControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  getErrorMessage() {
    return this.formControl.hasError('required') ? 'Required field' :
      this.formControl.hasError('email') ? 'Not a valid email' :
        '';
  }

  submit() {
  // emppty stuff
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  public confirmAdd(): void {
    //this.dataService.addInvoice(this.data).subscribe(e=>{console.log(e) },er=>{console.log(er)});
    this.dialogRef.close();
  }

}
