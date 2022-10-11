import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { Interest } from '../model/interest';

@Injectable({providedIn:'root'})
export class AreaOfInterestService{

    interestDetails:any;

    constructor(private http:HttpClient, private router:Router){}

    fetchAllAreaOfInterest():Observable<any>{
        return this.http.get('http://localhost:8005/area-of-interest/get-all-area-of-interest');
    }

    addInterest(interests:Interest){
        this.http.post('http://localhost:8005/area-of-interest/addInterests', interests)
        .subscribe({
          next:(v)=>{
            this.interestDetails = v;
            this.router.navigate(['/addInterest'])
          }, error: (e) => {
            console.log("errors")
            console.log(e)
          }
        })
      }
}