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

    console.log(this._usr.data);
  this.data=this._usr.data;
 this.getEmployees();
  }


  private getEmployees() {
    this._usr.getCustomersList().subscribe(data => this.user=data)
    
  }

 

update() {
  this.router.navigate(['/newform']);
}

view() {
 this.router.navigate(['/view'])
}


}

