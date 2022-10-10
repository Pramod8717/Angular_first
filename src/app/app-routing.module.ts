import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms'; 
import { LoginComponent } from './login/login.component';
const routes: Routes = [

  {
    path:"home",
    component:HomeComponent
  },

  {
    path:"about",
    component:AboutComponent
  },

  {
    path:"register",
    component:RegisterComponent
  },
  
  {
    path:"profile",
    component:ProfileComponent
  },

  {
    path:"login",
    component:LoginComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes),ReactiveFormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule {}
