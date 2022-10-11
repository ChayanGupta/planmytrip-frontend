import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms'
import { ActivityService } from '../services/activities.service';
import { AreaOfInterestService } from '../services/areaOfInterest.service';
import { AuthService } from '../services/auth.service';
import { PackagesService } from '../services/packages.service';
import { TypeService } from '../services/type.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  addPackageForm:any
  activities:any=[]
  areaOfInterest:any=[]
  types:any=[]

  constructor(private packageService:PackagesService,
              private activityService:ActivityService, 
              private typeService:TypeService, 
              private areaOfInterestService:AreaOfInterestService) { }

  ngOnInit(): void {
    this.addPackageForm = new FormGroup({
      cityName:new FormControl(null,[Validators.required]),
      price:new FormControl(null,[Validators.required]),
    })
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
    this.packageService.addPackage(this.addPackageForm.value)
    this.addPackageForm.reset()
  }

}
