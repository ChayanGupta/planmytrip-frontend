import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { PackagesService } from "../services/packages.service";

@Injectable({providedIn:'root'})
export class PackageResolver implements Resolve<any>{

    constructor(private packageService:PackagesService){}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):Observable<any> {
        return this.packageService.fetchAllPackages();
    }
    
}