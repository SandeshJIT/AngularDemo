import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup,FormControl,Validators,AbstractControl, ValidationErrors, ValidatorFn, FormBuilder } from '@angular/forms';
import { DataService } from './dataservice.service';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'I am Testing how it works';
  name : String;
  artist : any;
  form!: FormGroup;
  constructor(private http:HttpClient, private formB:FormBuilder ,private artService : DataService){
    this.name = "";
    
  }
  ngOnInit() : void{
    this.artService.get().subscribe((data) =>{
      this.artist = data;
    });
    }
    showName(ar:any){
        this.name = ar.name;
    }
    // this.http.get<any>("http://127.0.0.1:8887/src/assets/data.json").subscribe(data =>{
    //     this.artist = data;
    // });
  

}
