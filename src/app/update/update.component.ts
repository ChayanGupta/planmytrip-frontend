import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router';
import { ActivityService } from '../services/activities.service';
import { AreaOfInterestService } from '../services/areaOfInterest.service';
import { AuthService } from '../services/auth.service';
import { PackagesService } from '../services/packages.service';
import { TypeService } from '../services/type.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  updatePackageForm:any
  activities:any=[]
  areaOfInterest:any=[]
  types:any=[]
  package:any=[]

  constructor(private authService:AuthService,
              private packageService:PackagesService,
              private activityService:ActivityService, 
              private typeService:TypeService, 
              private areaOfInterestService:AreaOfInterestService,
              private route:ActivatedRoute,
              private router:Router) { }

  ngOnInit(): void {
    this.updatePackageForm = new FormGroup({
      id:new FormControl(this.route.snapshot.params['id']),
      cityName:new FormControl(null,[Validators.required]),
      price:new FormControl(null,[Validators.required]),
    })

    this.packageService.fetchPackageDetail(this.route.snapshot.params['id']).subscribe({
      next:(value)=>{
        this.package = value
      }
    });

    this.typeService.getAllTypes().subscribe({
      next:(value)=>{
        this.types = value
      }
    })
    this.activityService.getAllActivities().subscribe({
      next:(value)=>{
        this.activities = value
      }
    })

    this.areaOfInterestService.fetchAllAreaOfInterest().subscribe({
      next:(value)=>{
        this.areaOfInterest = value
      }
    })
    
  }
  onSubmit():void{
    this.packageService.updatePackage(this.updatePackageForm.value)
    this.updatePackageForm.reset()
    this.router.navigate(['/showAll'])
  }

}
