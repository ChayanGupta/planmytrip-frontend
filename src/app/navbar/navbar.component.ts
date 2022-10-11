import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  userDetails:any;
  constructor(private authService:AuthService) { }

  ngOnInit(): void {
    
  }

  isLoggedIn():boolean{
    this.userDetails= this.authService.userDetails;
    return this.authService.isLoggedIn;
  }
  isAdmin():boolean{
    if(this.userDetails.user.role=='ROLE_ADMIN'){
      return true;
    }
    return false;
  }
  onLogout():void{
    this.authService.isLoggedIn = false;
  }

}
