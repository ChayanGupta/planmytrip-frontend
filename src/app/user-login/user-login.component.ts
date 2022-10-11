import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  loginForm:any
  errorMessage:string = ''

  constructor(private authService:AuthService) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email:new FormControl(null,[Validators.required,Validators.email]),
      password:new FormControl(null,[Validators.required,Validators.minLength(5)])
    })
  }

  onLogin(): void {
    this.authService.login(this.loginForm.value)
    this.loginForm.reset()
  }
  
  setErrorMessage():string{
    return this.authService.errorMessage;
  }

}
