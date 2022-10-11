import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms'
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  registerForm:any

  constructor(private authService:AuthService) { }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      name:new FormControl(null,[Validators.required]),
      email:new FormControl(null,[Validators.required,Validators.email]),
      password:new FormControl(null,[Validators.required,Validators.minLength(5)]),
      role:new FormControl('ROLE_USER')
    })
  }

  onRegister():void{
    this.authService.register(this.registerForm.value)
    this.registerForm.reset()
  }

  setErrorMessage():string{
    return this.authService.errorMessage;
  }

}
