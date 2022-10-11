import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn:'root'
})
export class TypeService{
    
    constructor(private http:HttpClient){}

    getAllTypes():Observable<any>{
        return this.http.get('http://localhost:8005/type/get-all-types');
    }
}