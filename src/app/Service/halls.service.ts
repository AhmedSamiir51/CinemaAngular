import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HallsService {

  constructor(public http:HttpClient) { }
  baseUrl="https://localhost:44385/api/Halls"


  GetHalls( ) {
    return this.http.get<any[]>( this.baseUrl+"/GetAll" );
  }
}
