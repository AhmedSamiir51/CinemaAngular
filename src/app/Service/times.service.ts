import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimesService {

  constructor(public http:HttpClient) { }
  baseUrl="https://localhost:44385/api/Times"


  GetAllTimes( ) {
    return this.http.get<any[]>( this.baseUrl+"/GetAll" );
  }

  getTimes(i:number){
    return this.http.get<any>(this.baseUrl+"/"+i)
  }

  addTimes(body:any){
    return this.http.post<any>(this.baseUrl+"/",body)
  }


  editTimes(edit:any){
    return this.http.put(this.baseUrl+"/"+edit.id,edit)
  }

  deleteTimes(id:number){
    return this.http.delete(this.baseUrl+"/"+id)
  }
}
