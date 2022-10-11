import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { Package } from "../model/package";

@Injectable({
  providedIn: 'root'
})
export class PackagesService {
  
  packages: any = [];
  packageDetail:any;

  constructor(private http: HttpClient, private router:Router) { }

  fetchAllPackages(): Observable<any> {
    return this.http.get('http://localhost:8005/package/get-all-packages');
  }

  fetchPackageDetail(id:any):Observable<any>{
    return this.http.get(`http://localhost:8005/package/package-detail/${id}`);
  }
  
  deletePackage(id: number): Observable<Object> {
    return this.http.delete(`http://localhost:8005/package/delete/${id}`);
  }

  getPackages() {
    this.fetchAllPackages().subscribe(data => {
      this.packages = data;
    });
    return this.packages;
  }

  updatePackage(package1:any){
    this.http.put('http://localhost:8005/package/update',package1);
  }

  addPackage(packages:Package){
    this.http.post('http://localhost:8005/package/addPackage', packages)
    .subscribe({
      next:(v)=>{
        this.packageDetail = v;
        this.router.navigate(['/showAll'])
      }, error: (e) => {
        console.log("errors")
        console.log(e)
      }
    })
  }

  
}