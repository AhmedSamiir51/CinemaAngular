import { TimesService } from './../../../Service/times.service';
import { DelteTimesComponent } from './delte-times/delte-times.component';
import { CreateTimesComponent } from './create-times/create-times.component';
import { EditTimesComponent } from './edit-times/edit-times.component';
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
  selector: 'app-times',
  templateUrl: './times.component.html',
  styleUrls: ['./times.component.scss']
})
export class TimesComponent implements OnInit {

  @ViewChild(MatPaginator) paginator?: MatPaginator;


  Datasource: any =new MatTableDataSource
  displayedColumns: string[] = [ 'id','description', 'Action']
  constructor(  public dialog: MatDialog , private service: TimesService) { }

  ngOnInit(): void {
    this.GetAllTimes()
  }


  GetAllTimes(){
    this.service.GetAllTimes().subscribe(e => {this.Datasource = new MatTableDataSource(e) ;
      this.Datasource.paginator = this.paginator;

    },er=>{console.log(er)})
  }




  startEdit( id:number, description:string  ){
    const dialogRef = this.dialog.open(EditTimesComponent, {
      data: {id: id, description: description }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.GetAllTimes()

    });

  }

  addNew() {
    const dialogRef = this.dialog.open(CreateTimesComponent, {
      data: {issue: Halls }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.GetAllTimes()
    });
  }

  deleteItem(id:number, description:string ) {
    const dialogRef = this.dialog.open(DelteTimesComponent, {
      data:{id: id, description: description  }
    });
    dialogRef.afterClosed().subscribe(result => {
    this.GetAllTimes()
    });
  }
}
