import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { HallsService } from 'src/app/Service/halls.service';
import { MoivesService } from 'src/app/Service/moives.service';

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.scss']
})
export class  EditMovieComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<EditMovieComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private toastr: ToastrService,
    public service: MoivesService, public HallsService: HallsService
  ) {}


  dataHalls:any

  ngOnInit(): void {
     this.HallsService.GetHallsForMoviesbyid(this.data.idHalls).subscribe(e=>this.dataHalls=e)
  }

  moviesList: any;

  onNoClick(): void {
    this.dialogRef.close();

  }

  public confirmAdd(): void {

    this.service.EditMovie(this.data).subscribe(
      (e) => {
        this.toastr.success("Updated Success"),this.dialogRef.close()
      },
      (er) => {
        this.toastr.error("Not Updated")
      }
    );
  }


}
