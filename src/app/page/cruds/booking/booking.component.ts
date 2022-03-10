import { EditBookingComponent } from './edit-booking/edit-booking.component';
import { CreateBookingComponent } from './create-booking/create-booking.component';
import { DelteBookingComponent } from './delte-booking/delte-booking.component';
import { BookingService } from './../../../Service/booking.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Halls } from 'src/app/model/Halls';
import { HallsService } from 'src/app/Service/halls.service';
import { CreateHallsComponent } from '../halls/create-halls/create-halls.component';
import { DeleteHallsComponent } from '../halls/delete-halls/delete-halls.component';
import { EditHallsComponent } from '../halls/edit-halls/edit-halls.component';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {
  @ViewChild(MatPaginator) paginator?: MatPaginator;


  Datasource: any =new MatTableDataSource
  displayedColumns: string[] = [ 'user','movie','time','hall','dateday', 'Action']
  constructor(  public dialog: MatDialog , private service: BookingService) { }

  ngOnInit(): void {
    this.getAllHalls()
  }


  getAllHalls(){
    this.service.getAllBooking().subscribe(e => {this.Datasource = new MatTableDataSource(e) ;
      this.Datasource.paginator = this.paginator;
      console.log(e,"ssssss")
    },er=>{console.log(er)})
  }




  startEdit( row:any){

    const dialogRef = this.dialog.open(EditBookingComponent, {
      data: {row:row }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getAllHalls()
    });

  }

  addNew() {
    const dialogRef = this.dialog.open(CreateBookingComponent, {
      data: {issue: Halls }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getAllHalls()
    });
  }

  deleteItem(row:any ) {
    const dialogRef = this.dialog.open(DelteBookingComponent, {
      data:{row:row}
    });
    dialogRef.afterClosed().subscribe(result => {
    this.getAllHalls()
    });
  }

}
