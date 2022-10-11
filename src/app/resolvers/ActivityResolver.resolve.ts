import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { ActivityService } from "../services/activities.service";

@Injectable({providedIn:'root'})
export class ActivityResolver implements Resolve<any>{

    constructor(private activityService:ActivityService){}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):Observable<any> {
        return this.activityService.getAllActivities();
    }
    
}