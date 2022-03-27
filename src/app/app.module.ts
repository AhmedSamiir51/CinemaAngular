import { CreateHallsComponent } from './page/cruds/halls/create-halls/create-halls.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './page/home/home.component';
import { RegisterComponent } from './page/register/register.component';
import { LoginComponent } from './page/login/login.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { ToastrModule } from 'ngx-toastr';

/*Angular Material */
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatBadgeModule } from '@angular/material/badge';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatStepperModule } from '@angular/material/stepper';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatNativeDateModule, MatRippleModule, MAT_DATE_LOCALE, MAT_DATE_FORMATS, DateAdapter} from '@angular/material/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTreeModule } from '@angular/material/tree';

import { MoviesComponent } from './page/movies/movies.component';
import { BookingComponent } from './page/booking/booking.component';
import { MovieComponent } from './page/movie/movie.component';
import { NavBarComponent } from './page/nav-bar/nav-bar.component';
import { AboutUsComponent } from './page/about-us/about-us.component';
import { ContactComponent } from './page/contact/contact.component';
import { TimesComponent } from './page/cruds/times/times.component';
import { HallsComponent } from './page/cruds/halls/halls.component';
import { MoviesComponent as Movies } from './page/cruds/movies/movies.component';
import { BookingComponent as Booking } from './page/cruds/booking/booking.component';
import { A11yModule } from '@angular/cdk/a11y';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { PortalModule } from '@angular/cdk/portal';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { CdkTableModule } from '@angular/cdk/table';
import { CdkTreeModule } from '@angular/cdk/tree';
import { DeleteHallsComponent } from './page/cruds/halls/delete-halls/delete-halls.component';
import { EditHallsComponent } from './page/cruds/halls/edit-halls/edit-halls.component';
import { CreateTimesComponent } from './page/cruds/times/create-times/create-times.component';
import { EditTimesComponent } from './page/cruds/times/edit-times/edit-times.component';
import { DelteTimesComponent } from './page/cruds/times/delte-times/delte-times.component';
import { DelteBookingComponent } from './page/cruds/booking/delte-booking/delte-booking.component';
import { EditBookingComponent } from './page/cruds/booking/edit-booking/edit-booking.component';
import { CreateBookingComponent } from './page/cruds/booking/create-booking/create-booking.component';
import { CreateMovieComponent   } from './page/cruds/movies/create-movie/create-movie.component';
import { EditMovieComponent } from './page/cruds/movies/edit-movie/edit-movie.component';
import { DeleteMovieComponent } from './page/cruds/movies/delete-movie/delete-movie.component';
import { RegisterForAdminComponent } from './page/register/register-for-admin/register-for-admin.component';
import {CarouselModule} from 'primeng/carousel';

@NgModule({
  declarations: [
    Movies,
    Booking,
    AppComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    MoviesComponent,
    BookingComponent,
    MovieComponent,
    NavBarComponent,
    AboutUsComponent,
    ContactComponent,
    TimesComponent,
    HallsComponent,
    CreateHallsComponent,
    DeleteHallsComponent,
    EditHallsComponent,

    CreateTimesComponent,
    EditTimesComponent,
    DelteTimesComponent,
    DelteBookingComponent,
    EditBookingComponent,
    CreateBookingComponent,
    CreateMovieComponent,
    EditMovieComponent,
    DeleteMovieComponent,
    RegisterForAdminComponent,
   ],
  imports: [

    A11yModule,
    ClipboardModule,
    DragDropModule,
    PortalModule,
    ScrollingModule,
    CdkStepperModule,
    CdkTableModule,
    CdkTreeModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxPaginationModule,
    HttpClientModule,
    FormsModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    ReactiveFormsModule,
    CarouselModule,

    ToastrModule.forRoot(),

    BrowserAnimationsModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
