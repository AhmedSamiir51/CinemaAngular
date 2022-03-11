import { HallsService } from './../../../../Service/halls.service';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-halls',
  templateUrl: './edit-halls.component.html',
  styleUrls: ['./edit-halls.component.scss']
})
export class EditHallsComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<EditHallsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,private toastr: ToastrService, public dataService: HallsService) { }

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
    this.dataService.editHalls(this.data)
    .subscribe(e=>{this.toastr.success("Updated Success"),this.dialogRef.close()},er=>{this.toastr.error("Not Updated")});

    this.dialogRef.close();

  }
}
