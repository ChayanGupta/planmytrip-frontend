import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AreaOfInterestService } from '../services/areaOfInterest.service';

@Component({
  selector: 'app-add-interest',
  templateUrl: './add-interest.component.html',
  styleUrls: ['./add-interest.component.css']
})
export class AddInterestComponent implements OnInit {
  interests:any=[]
  addInterestForm:any
  searchText:any;
  constructor(private interestService:AreaOfInterestService) { }

  ngOnInit(): void {
    this.getInterests();
    this.addInterestForm = new FormGroup({
      name:new FormControl(null,[Validators.required]),
    })
  }
  private getInterests(){
    this.interestService.fetchAllAreaOfInterest().subscribe(data => {
      this.interests=data;
    });
  } 
  onSubmit():void{
    this.interestService.addInterest(this.addInterestForm.value)
    this.addInterestForm.reset()
  }

}