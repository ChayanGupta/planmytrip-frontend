import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivityService } from '../services/activities.service';
import { AreaOfInterestService } from '../services/areaOfInterest.service';
import { PackagesService } from '../services/packages.service';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css']
})
export class ExploreComponent implements OnInit {

  packages:any=[]
  activities:any=[]
  areaOfInterest:any=[]
  selectedActivity:string='null'
  selectedAreaOfInterest:string='null'
  selectedDestination:string='null'
  maxPrice:any='null'

  constructor(private packageService:PackagesService,private activityService:ActivityService
                , private areaOfInterestService:AreaOfInterestService,
                private router:Router){ }
  
  ngOnInit(): void {
    this.packageService.fetchAllPackages().subscribe({
      next:(value)=>{
        console.log(value)
        this.packages = value
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

  onChangeDestination(selectedDestination:string):void{
    this.selectedDestination = selectedDestination;
  }

  onChangeActivity(selectedActivity:string):void{
    this.selectedActivity = selectedActivity;
  }

  onChangeAreaOfInterest(selectedAreaOfInterest:string):void{
    this.selectedAreaOfInterest = selectedAreaOfInterest;
  }

  onChangeMaxPrice(maxPrice:any):void{
    this.maxPrice = maxPrice;
  }

  onClickPackage(id:any):void{
    this.router.navigate(['/package',id]);
  }
}
