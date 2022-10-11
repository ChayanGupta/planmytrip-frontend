import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { Activity } from "../model/activity";

@Injectable({
    providedIn:'root'
})
export class ActivityService{
    
    activityDetails:any;

    constructor(private http:HttpClient, private router:Router){}

    getAllActivities():Observable<any>{
        return this.http.get('http://localhost:8005/activities/get-all-activities');
    }

    addActivity(activities:Activity){
        this.http.post('http://localhost:8005/activities/addActivities', activities)
        .subscribe({
          next:(v)=>{
            this.activityDetails = v;
            this.router.navigate(['/addActivity'])
          }, error: (e) => {
            console.log("errors")
            console.log(e)
          }
        })
      }
}