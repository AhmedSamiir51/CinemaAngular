import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(public http:HttpClient) { }
  baseUrl="https://localhost:44385/api/Booking"



  getAllBooking() {
    return this.http.get<any[]>(this.baseUrl  );
  }

  getBooking(i:number){
    return this.http.get<any>(this.baseUrl+"/"+i)
  }

  addBooking(body:any){
    return this.http.post<any>(this.baseUrl+"/",body)
  }

  editBooking(edit:any){
    return this.http.put(this.baseUrl+"/"+edit.id,edit)
  }


  deleteBooking(id:number){
    return this.http.delete(this.baseUrl+"/"+id)
  }


}
