import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExploreComponent } from './explore/explore.component';
import { HomeComponent } from './home/home.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AuthGuard } from './services/auth-guard.service';
import { PackageResolver } from './resolvers/PackageResolver.resolve';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { ActivityResolver } from './resolvers/ActivityResolver.resolve';
import { AreaOfInterestResolver } from './resolvers/AreaOfInterestResolver.resolve';
import { PackageComponent } from './package/package.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { AdminHomepageComponent } from './admin-homepage/admin-homepage.component';
import { AddComponent } from './add/add.component';
import { ShowAllComponent } from './show-all/show-all.component';
import { PackageDetailResolver } from './resolvers/PackageDetailResolver.resolve';
import { UpdateComponent } from './update/update.component';
import { AddActivityComponent } from './add-activity/add-activity.component';
import { AddInterestComponent } from './add-interest/add-interest.component';
const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: UserLoginComponent},
  {path: 'register', component: UserRegisterComponent},
  {path: 'package/:id', resolve:{package:PackageDetailResolver} ,component: PackageComponent},
  {path: 'homepage', canActivate:[AuthGuard] ,component: HomepageComponent},
  {path: 'explore', resolve:{packages:PackageResolver,activities:ActivityResolver,areaOfInteres:AreaOfInterestResolver},
  component: ExploreComponent},
  {path: 'checkout', component: CheckoutComponent},
  {path: 'admin_homepage', component: AdminHomepageComponent},
  {path: 'add', component: AddComponent},
  {path: 'update/:id', resolve:{package:PackageDetailResolver} ,component: UpdateComponent},
  {path: 'addActivity', component: AddActivityComponent},
  {path: 'addInterest', component: AddInterestComponent},
  {path: 'showAll', component: ShowAllComponent},
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{onSameUrlNavigation:'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
