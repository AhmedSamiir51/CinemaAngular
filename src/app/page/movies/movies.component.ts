import { MoivesService } from './../../Service/moives.service';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  // styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<MoviesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any  ,private service :MoivesService
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
  formData = new FormData();

  onFileChange(files: any){
    this.formData.append('ProfilePicture', files[0]);
  }

  onSubmit() {
    var aasd=10

    this.formData.append('Description', "asd" );
    this.formData.append('Name', "asd" );
    this.formData.append('TraileUrl', "asd" );
    this.formData.append('idHalls',  '10' );
   this.formData.append('IsVisibale',"true" );
this.service.InsertMoive(this.formData).subscribe(e=>console.log(e))

  }

  ngOnInit(): void {
  }
}
