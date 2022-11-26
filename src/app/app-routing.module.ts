// routing
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BannerComponent } from './banner/banner.component';
import { DisplayComponent } from './display/display.component';
import { FormComponent } from './form/form.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RegisterComponent } from './register/register.component';
import { SearchComponent } from './search/search.component';


const routes: Routes = [

  {path:'register',component: RegisterComponent},
  {path:'home',component: HomeComponent},
  {path:'display',component: DisplayComponent},
  {path:'form',component: FormComponent},
  {path:'banner',component: BannerComponent},
  {path:'search',component:SearchComponent},
  {path:'',redirectTo:'/home', pathMatch:'full'},
  {path:'**',component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
