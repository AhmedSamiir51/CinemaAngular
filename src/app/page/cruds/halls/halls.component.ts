import { EditHallsComponent } from './edit-halls/edit-halls.component';
import { CreateHallsComponent } from './create-halls/create-halls.component';
import { DeleteHallsComponent } from './delete-halls/delete-halls.component';
import { HallsService } from './../../../Service/halls.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Data } from '@angular/router';
import { Halls } from 'src/app/model/Halls';

@Component({
  selector: 'app-halls',
  templateUrl: './halls.component.html',
  styleUrls: ['./halls.component.scss']
})
export class HallsComponent implements OnInit {

  @ViewChild(MatPaginator) paginator?: MatPaginator;


  Datasource: any =new MatTableDataSource
  displayedColumns: string[] = [ 'name','limit', 'Action']
  constructor(  public dialog: MatDialog , private service: HallsService) { }

  ngOnInit(): void {
    this.getAllHalls()
  }


  getAllHalls(){
    this.service.GetHalls().subscribe(e => {this.Datasource = new MatTableDataSource(e) ;
      this.Datasource.paginator = this.paginator;
      console.log(e,"ssssss")
    },er=>{console.log(er)})
  }




  startEdit( id:number, name:string,limit:string ){
    const dialogRef = this.dialog.open(EditHallsComponent, {
      data: {id: id, name: name, limit: limit  }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getAllHalls()

    });

  }

  addNew() {
    const dialogRef = this.dialog.open(CreateHallsComponent, {
      data: {issue: Halls }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getAllHalls()
    });
  }

  deleteItem(id:number, name:string,limit:string ) {
    const dialogRef = this.dialog.open(DeleteHallsComponent, {
      data:{id: id, name: name, limit: limit  }
    });
    dialogRef.afterClosed().subscribe(result => {
    this.getAllHalls()
    });
  }





}
