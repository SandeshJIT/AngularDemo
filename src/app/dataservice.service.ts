import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import {catchError} from 'rxjs/operators'; 
const baseurl = "http://localhost:4300"
@Injectable()


export class DataService{
    constructor(private http:HttpClient){
    }
  
    get(){
        return this.http.get<any>("http://localhost:4300");
    }
    add(data:any){
      
      const headers = { 'content-type': 'application/json'}  
      const body=JSON.stringify(data);
      console.log(body);
      return this.http.post("http://localhost:4300/upload",body,{'headers':headers}).subscribe();
    }
}