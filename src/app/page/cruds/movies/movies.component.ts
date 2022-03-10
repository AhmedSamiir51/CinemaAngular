import { Component, OnInit, ViewChild } from '@angular/core';
import { MoivesService } from 'src/app/Service/moives.service';

import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';

import { CreateMovieComponent } from './create-movie/create-movie.component';
import { EditMovieComponent } from './edit-movie/edit-movie.component';
import { DeleteMovieComponent } from './delete-movie/delete-movie.component';
import { MovieModel } from 'src/app/model/Movie';

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
    'ID',
    'Name',
    'Photo',
    'Description',
    'Actions',
  ];

  constructor(
    private moviesService: MoivesService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getAllMovies();
  }

  refreshMoviesList() {
    this.moviesService.GetAllMovies().subscribe((data) => {
      this.moviesList = data;
    });
    this.ngOnInit();
  }

  getAllMovies() {
    this.moviesService.GetAllMovies().subscribe(
      (e) => {
        console.log(e);
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
      data: { issue: MovieModel },
    });
    DialogRef.afterOpened().subscribe((e) => {
      this.getAllMovies();
    });
    DialogRef.afterClosed().subscribe((result) => {
      this.refreshMoviesList();
    });
    this.refreshMoviesList();
  }

  startEdit(
    id: number,
    name: string,
    photoData: string,
    trailerUrl: string,
    description: string
  ) {
    const dialogRef = this.dialog.open(EditMovieComponent, {
      data: {
        id: id,
        name: name,
        photoData: photoData,
        trailerUrl: trailerUrl,
        description: description,
      },
    });
    dialogRef.afterOpened().subscribe((e) => {
      this.getAllMovies()
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
    templateUrl: string,
    description: string
  ) {
    const dialogRef = this.dialog.open(DeleteMovieComponent, {
      data: {
        id: id,
        name: name,
        photoData: photoData,
        templateUrl: templateUrl,
        description: description,
      },
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.refreshMoviesList();
    });
    this.refreshMoviesList();
  }
}
