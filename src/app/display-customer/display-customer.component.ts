import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-display-customer',
  templateUrl: './display-customer.component.html',
  styleUrls: ['./display-customer.component.scss']
})
export class DisplayCustomerComponent implements OnInit {

  public data:Customer;

  public user=[];

  constructor(private _usr:CustomerService,private router: Router) {
    
   }

  ngOnInit(): void {


  this.data=this._usr.data;

  if(this.data.email!=null) {
    this.isValid=true;
  }
   this.getEmployees();

  }

  public isValid:boolean=false;


  private getEmployees() {
    this._usr.getCustomersList().subscribe(data => this.user=data)
  }

 

update() {
  this.router.navigate(['/update']);
}

view() {
 this.router.navigate(['/view'])
}


}

