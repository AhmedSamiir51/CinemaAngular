import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { HallsService } from 'src/app/Service/halls.service';
import { MoivesService } from 'src/app/Service/moives.service';

@Component({
  selector: 'app-create-movie',
  templateUrl: './create-movie.component.html',
  styleUrls: ['./create-movie.component.scss'],
})
export class CreateMovieComponent implements OnInit {
  moviesList: any;
  formData = new FormData();

  dataHalls:any
  formModel = new FormGroup({
    PersonFirstName: new FormControl('', [Validators.required,]),
    PersonLastName: new  FormControl('', [Validators.required,]),
    PersonEmailName: new FormControl('', [Validators.required,]),
    PersonPhone: new FormControl('', [Validators.required,]),
    ProfilePicture: new  FormControl('', [Validators.required,]),
    PersonPassword: new  FormControl ('', [Validators.required, Validators.minLength(4)]),
  });

  constructor(private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<CreateMovieComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,private toastr: ToastrService,
    public service: MoivesService, public HallsService: HallsService
  ) {}

  ngOnInit(): void {
    this.HallsService.GetHallsForMovies().subscribe(e=>this.dataHalls=e)
  }


  onFileChange(files: any){
    this.formData.append("ProfilePicture", files[0]);

  }


  submit() {
    // emppty stuff
  }
  onNoClick(): void {
    this.dialogRef.close();

  }

  confirmAdd(): void {
    this.formData.append('Description',this.data.description);
    this.formData.append('Name', this.data.name );
    this.formData.append('TraileUrl',this.data.TraileUrl);
    this.formData.append('idHalls',  this.data.idHalls );
    this.formData.append('IsVisibale',this.data.isVisibale );

      this.service.InsertMoive(this.formData).subscribe(
      (e) => {
        this.toastr.success("Created Success"),this.dialogRef.close()
      },
      (er) => {
        this.toastr.error("Faild On Create")

      }
    );
  }


}
