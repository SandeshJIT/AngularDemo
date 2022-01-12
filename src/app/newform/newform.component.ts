import { Component, NgModule, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators,AbstractControl, ValidationErrors, ValidatorFn, FormBuilder } from '@angular/forms';
import { DataService } from '../dataservice.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';




@Component({
  selector: 'app-newform',
  templateUrl: './newform.component.html',
  styleUrls: ['./newform.component.css']
})
export class NewformComponent implements OnInit {
  form!: FormGroup;
  artist : any;
  constructor( private formB:FormBuilder ,private artService : DataService, private router:Router, private http : HttpClient) { }

  ngOnInit(): void {
    // this.artist = this.artService.get();
    this.form = this.formB.group({
      name : this.formB.control('',Validators.required),
      age : this.formB.control('',this.checkAge),
      bio : this.formB.control('',Validators.required)
    }
    );
  }
  onSubmit(form:any){
      this.artService.add(form.value)
      this.router.navigate(["","/"])
  }
  checkAge(control : AbstractControl){
    var age = parseInt(control.value);
    if(age<18){
      return {age:true};
    }
    else{
      return null;
    }

  }

}
