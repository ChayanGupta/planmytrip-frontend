import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule,ReactiveFormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AuthService } from './services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuard } from './services/auth-guard.service';
import { NavbarComponent } from './navbar/navbar.component';
import { ExploreComponent } from './explore/explore.component';
import { PackageComponent } from './package/package.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { AdminHomepageComponent } from './admin-homepage/admin-homepage.component';
import { AddComponent } from './add/add.component';
import { ShowAllComponent } from './show-all/show-all.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AddActivityComponent } from './add-activity/add-activity.component';
import { AddInterestComponent } from './add-interest/add-interest.component';
import { UpdateComponent } from './update/update.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserLoginComponent,
    UserRegisterComponent,
    HomepageComponent,
    NavbarComponent,
    ExploreComponent,
    PackageComponent,
    CheckoutComponent,
    AdminHomepageComponent,
    AddComponent,
    ShowAllComponent,
    AddActivityComponent,
    AddInterestComponent,
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    Ng2SearchPipeModule
  ],
  providers: [AuthService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
