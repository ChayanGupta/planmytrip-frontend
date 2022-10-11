import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { AreaOfInterestService } from "../services/areaOfInterest.service";

@Injectable({providedIn:'root'})
export class AreaOfInterestResolver implements Resolve<any>{

    constructor(private areaOfInteresService:AreaOfInterestService){}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):Observable<any> {
        return this.areaOfInteresService.fetchAllAreaOfInterest();
    }
    
}