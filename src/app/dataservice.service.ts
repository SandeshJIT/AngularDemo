import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
@Injectable()

export class DataService{
    constructor(private http:HttpClient){
    }
  
    get(){
        return this.http.get<any>("../assets/data.json");
    }
    add(data:any){
      console.log(data)
    }
}