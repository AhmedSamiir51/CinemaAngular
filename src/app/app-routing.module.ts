import { TimesComponent } from './page/cruds/times/times.component';
import { HallsComponent } from './page/cruds/halls/halls.component';
import { ContactComponent } from './page/contact/contact.component';
import { AboutUsComponent } from './page/about-us/about-us.component';
import { MovieComponent } from './page/movie/movie.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { MoviesComponent } from './page/cruds/movies/movies.component';
import { BookingComponent } from './page/cruds/booking/booking.component';

const routes: Routes = [
  {path:"home",component:HomeComponent },
  {path:"about",component:AboutUsComponent },
  {path:"contact",component:ContactComponent },
  {path:"movie/:id",component:MovieComponent} ,
  {path:"HallsCrud",component:HallsComponent} ,
  {path:"MoviesCrud",component:MoviesComponent} ,
  {path:"TimesCrud",component:TimesComponent} ,
  {path:"BookingCrud",component:BookingComponent} ,
  {path:"",redirectTo:"home",pathMatch:"full"}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
