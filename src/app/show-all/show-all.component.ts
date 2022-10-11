import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { PackagesService } from '../services/packages.service';

@Component({
  selector: 'app-show-all',
  templateUrl: './show-all.component.html',
  styleUrls: ['./show-all.component.css']
})
export class ShowAllComponent implements OnInit {
  packages:any=[]
  searchText:any;
  constructor(private packageService:PackagesService,private router:Router) { }

  ngOnInit(): void {
    this.getPackages();
  }
  private getPackages(){
    this.packageService.fetchAllPackages().subscribe(data => {
      this.packages=data;
    });
  } 
  deletePackage(id:number){
    this.packageService.deletePackage(id).subscribe(data => {
      this.getPackages();
    })
  }

  updatePackage(id:any){
    this.router.navigate(['/update',id])
  }

}
