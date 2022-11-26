// register.component.ts
import { Component, OnInit } from '@angular/core';
import { User } from '../user';

interface caste {
  name: string,
}

interface religion {
  name: string,
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public value1: string;
  public value2: string;
  public value3: string;
  public value4: string;
  public value5: string;
  public value6: number;
  public value7: string;
  public value8: string;
  public value9: string;
  public value10:Date;


  us: User= new User();


  city: string;

   castes: caste[];

  public religions:religion[];


  onSubmit() {
    console.log(this.us);
  }
 
  constructor() { 

    this.castes = [
      {name: 'Brahmin'},
      {name: 'Reddy'},
      {name: 'Rao'},
      {name: 'Kumar'},
      {name: 'Padmashali'}
  ]; 

  this.religions = [
{name:'Hindu'},
{name:'Muslim'},
{name:'christan'},
{name:'buddhist'}

  ]
  }
  ngOnInit(): void {
  }

 

  public obj:User;


  uploadedFiles: any[] = [];

  
}



  





