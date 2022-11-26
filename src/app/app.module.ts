// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NotFoundComponent } from './not-found/not-found.component';

import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import { PasswordModule } from "primeng/password";
import {InputTextareaModule} from 'primeng/inputtextarea';
import {InputNumberModule} from 'primeng/inputnumber';
import {RadioButtonModule} from 'primeng/radiobutton';
import { DropdownModule } from 'primeng/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserService } from './user.service';
import {FileUploadModule} from 'primeng/fileupload';
import {MenubarModule} from 'primeng/menubar';
import { MenuItem } from 'primeng/api';
import {ImageModule} from 'primeng/image';
import {CalendarModule} from 'primeng/calendar';
import {CardModule} from 'primeng/card';
import { PanelModule } from "primeng/panel";
import { RippleModule } from "primeng/ripple";
import { FormComponent } from './form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NewformComponent } from './newform/newform.component';
import { DisplayComponent } from './display/display.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { BannerComponent } from './banner/banner.component';
import { SearchComponent } from './search/search.component';

import {RouterModule} from '@angular/router';

import { ProductService } from './productservice';

import {TableModule} from 'primeng/table';
import {ToastModule} from 'primeng/toast';
import {SliderModule} from 'primeng/slider';
import {MultiSelectModule} from 'primeng/multiselect';
import {ContextMenuModule} from 'primeng/contextmenu';
import {DialogModule} from 'primeng/dialog';
import {ProgressBarModule} from 'primeng/progressbar';
import {RatingModule} from 'primeng/rating';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    FormComponent,
    NewformComponent,
    DisplayComponent,
    RegisterComponent,
    HomeComponent,
    BannerComponent,
    SearchComponent,
    FooterComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InputTextModule,
    ButtonModule,
    FormsModule,
    PasswordModule,
    InputTextareaModule,
    InputNumberModule,
    RadioButtonModule,
    DropdownModule,
    BrowserAnimationsModule,
    FileUploadModule,
    HttpClientModule,
    MenubarModule,
    ImageModule,
    CalendarModule,
    CardModule,
    PanelModule,
    RippleModule,
    ReactiveFormsModule,
    TableModule,
    RatingModule,
    ProgressBarModule,
    DialogModule,
    ContextMenuModule,
    MultiSelectModule,
    SliderModule,
    ToastModule,
    RouterModule,
    RouterModule.forRoot([
      {path:'',component: AppComponent}

		])
    
  ],
  providers: [UserService,ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
