import { MoivesService } from 'src/app/Service/moives.service';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-delete-movie',
  templateUrl: './delete-movie.component.html',
  styleUrls: ['./delete-movie.component.scss'],
})
export class DeleteMovieComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<DeleteMovieComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private toastr: ToastrService,
    public dataService: MoivesService
  ) {}

  ngOnInit(): void {} 
  onNoClick(): void {
    this.dialogRef.close();
  }

  confirmDelete(): void {
    this.dataService.DeleteMovie(this.data.id).subscribe(
      (e) => {
        this.dialogRef.close();
        this.toastr.success('Deleted Success'), this.dialogRef.close();
      },
      (er) => {
        this.toastr.error('Not Deleted');
      }
    );
    this.dialogRef.close();
  }
}
