import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PackagesService } from '../services/packages.service';

@Component({
  selector: 'app-package',
  templateUrl: './package.component.html',
  styleUrls: ['./package.component.css']
})
export class PackageComponent implements OnInit {
  package:any=[]

  constructor(private packageService:PackagesService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.packageService.fetchPackageDetail(this.route.snapshot.params['id']).subscribe({
      next:(value)=>{
        console.log(value)
        this.package = value
      }
    });
  }

}
