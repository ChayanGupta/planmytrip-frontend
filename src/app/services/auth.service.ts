import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import {User}  from '../model/User'
import { Router } from '@angular/router';
import { Activity } from '../model/activity';
import { Interest } from '../model/interest';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: User;
  userDetails:any;
  activities:Activity;
  interests:Interest;
  isLoggedIn: boolean = false
  errorMessage:string=''

  constructor(private http: HttpClient,private router:Router) { }

  login(user: User) {
    this.http.post('http://localhost:8005/user/login', user)
      .subscribe({
        next: (v) => {
          this.userDetails = v;
          this.isLoggedIn = true
          if(this.userDetails.user.role=='ROLE_USER'){
            this.router.navigate(['/homepage']);
          }
          else{
            this.router.navigate(['/admin_homepage'])
          }
        }, error: (e) => {
          setTimeout(()=>{
            this.errorMessage = ''
          },3000)
          this.errorMessage='Please login with correct credentials!!';
        }
      })
  }


  register(user: User) {
    this.http.post('http://localhost:8005/user/register', user)
      .subscribe({
        next: (v) => {
          this.userDetails = v;
          this.isLoggedIn = true
          this.router.navigate(['/homepage'])
        }, error: (e) => {
          setTimeout(()=>{
            this.errorMessage = ''
          },3000)
          this.errorMessage='User with this email already exist!!'
        }
      })
  }

  isAuthenticated():boolean {
    return this.isLoggedIn;
  } 
}
