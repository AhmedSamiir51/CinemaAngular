import { CreateMovieComponent } from './create-movie/create-movie.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MoivesService } from 'src/app/Service/moives.service';

import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';

import { MoviesComponent as ss  } from 'src/app/page/movies/movies.component';
import { EditMovieComponent } from './edit-movie/edit-movie.component';
import { DeleteMovieComponent } from './delete-movie/delete-movie.component';
import { MovieModel } from 'src/app/model/Movie';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit {
  @ViewChild(MatPaginator) paginator?: MatPaginator;

  moviesList: any;
  Datasource: any = new MatTableDataSource();
  displayedColumns: string[] = [

    'Name',
    'Photo',
    'Description',
    'Halls',
    'Actions',
  ];

  constructor(
    private moviesService: MoivesService, private toastr: ToastrService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getAllMovies();

  }

  refreshMoviesList() {
    this.moviesService.GetAllMoviesVs().subscribe((data) => {
       this.Datasource = new MatTableDataSource(data);
      this.Datasource.paginator = this.paginator;
    });
    this.ngOnInit();
  }

  getAllMovies() {
    this.moviesService.GetAllMoviesVs().subscribe(
      (e) => {
         this.Datasource = new MatTableDataSource(e);
        this.Datasource.paginator = this.paginator;
      },
      (er) => {
        console.log(er);
      }
    );
  }

  createNewMovie() {
    const DialogRef = this.dialog.open(CreateMovieComponent, {
      data: { data: MovieModel },
    });
    DialogRef.afterOpened().subscribe((e) => {
      this.getAllMovies()
      this.refreshMoviesList()

    });
    DialogRef.afterClosed().subscribe((result) => {
      this.refreshMoviesList()
    });
    this.refreshMoviesList();
  }

  startEdit(
    id: number,
    name: string,
    photoData: string,
    traileUrl: string,
    description: string,
    idHalls: number,
    isVisibale: boolean
  ) {
    const dialogRef = this.dialog.open(EditMovieComponent, {
      data: {
        id: id,
        name: name,
        photoData: photoData,
        traileUrl: traileUrl,
        description: description,
        idHalls: idHalls,
        isVisibale:isVisibale
      },
    });
    dialogRef.afterOpened().subscribe((e) => {
      this.getAllMovies()
      this.refreshMoviesList()

    });
    dialogRef.afterClosed().subscribe((result) => {
      this.refreshMoviesList()
    });
    this.refreshMoviesList();
  }

  deleteItem(
    id: number,
    name: string,
    photoData: string,
    traileUrl: string,
    description: string,
    idHalls: number

  ) {
    const dialogRef = this.dialog.open(DeleteMovieComponent, {
      data: {
        id: id,
        name: name,
        photoData: photoData,
        traileUrl: traileUrl,
        description: description,
        idHalls: idHalls
      },
    });
    dialogRef.afterOpened().subscribe((e) => {
      this.getAllMovies()
      this.refreshMoviesList()

    });
    dialogRef.afterClosed().subscribe((result) => {
      this.refreshMoviesList()
    });
    this.refreshMoviesList();
  }
}
