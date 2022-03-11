import { HallsService } from './../../../../Service/halls.service';
import { Halls } from './../../../../model/Halls';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create-halls',
  templateUrl: './create-halls.component.html',
  styleUrls: ['./create-halls.component.scss']
})
export class CreateHallsComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<CreateHallsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Halls,private toastr: ToastrService, public dataService: HallsService) { }

  ngOnInit(): void {
  }


  formControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  getErrorMessage() {
    return this.formControl.hasError('required') ? 'Required field' : '';
  }

  submit() {
  // emppty stuff
  }

  onNoClick(): void {
    this.dialogRef.close();

  }
  public confirmAdd(): void {
    this.dataService.addHalls(this.data)
    .subscribe(e=>{this.toastr.success("Created Success") ,this.dialogRef.close()},er=>{this.toastr.error("Faild On Create")});
    this.dialogRef.close();
  }

}
