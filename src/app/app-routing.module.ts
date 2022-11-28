// routing
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BannerComponent } from './banner/banner.component';
import { DisplayCustomerComponent } from './display-customer/display-customer.component';
import { DisplayComponent } from './display/display.component';
import { FormComponent } from './form/form.component';
import { HomeComponent } from './home/home.component';
import { NewformComponent } from './newform/newform.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RegisterComponent } from './register/register.component';
import { UpdateComponent } from './update/update.component';
import { ViewComponent } from './view/view.component';


const routes: Routes = [

  {path:'register',component: RegisterComponent},
  {path:'home',component: HomeComponent},
  {path:'photos',component: DisplayComponent},
  {path:'update',component: UpdateComponent},
  {path:'form',component: FormComponent},
  {path:'banner',component: BannerComponent},
  {path:'customerlist',component: DisplayCustomerComponent},
  {path:'newform',component: NewformComponent},
  {path:'view',component: ViewComponent},
  {path:'',redirectTo:'/home', pathMatch:'full'},

  { path: 'business', loadChildren: () => import('./business/business.module').then(m => m.BusinessModule) },
  {path:'**',component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
