import { toTypeScript } from '@angular/compiler';
import { areAllEquivalent } from '@angular/compiler/src/output/output_ast';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-subcomp',
  templateUrl: './subcomp.component.html',
  styleUrls: ['./subcomp.component.css'],
  inputs: ["ar","name"]
})
export class SubcompComponent implements OnInit {
  @Input() ar:any;
  @Input() name:any;
  det:any;
  constructor() { 
    this.det="";
  }

  ngOnInit(): void {
  }
  onClickName(ar:any){
 
    this.det = ar.bio
    console.log("he"+this.name)
  }

}
