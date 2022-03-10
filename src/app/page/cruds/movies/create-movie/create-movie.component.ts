import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MoivesService } from 'src/app/Service/moives.service';

@Component({
  selector: 'app-create-movie',
  templateUrl: './create-movie.component.html',
  styleUrls: ['./create-movie.component.scss'],
})
export class CreateMovieComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<CreateMovieComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public service: MoivesService
  ) {}

  ngOnInit(): void {}

  moviesList: any;
  formControl = new FormControl('', [Validators.required]);

  formData = new FormData();

  onFileChange(files: any){
    this.formData.append('ProfilePicture', files[0]);
  }

  getErrorMessage() {
    return this.formControl.hasError('required') ? 'Required field' : '';
  }

  submit() {
    // emppty stuff
  }

  onNoClick(): void {
    this.dialogRef.close()
    this.RefreshMoviesList();
  }

  public confirmAdd(): void {
    this.service.InsertMoive(this.data).subscribe(
      (e) => {
        console.log(e);
      },
      (er) => {
        console.log(er);
      }
    );
  }

  RefreshMoviesList() {
    this.service.GetAllMovies().subscribe((data) => {
      this.moviesList = data;
    });
  }
}
