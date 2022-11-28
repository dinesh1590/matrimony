import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService, PrimeNGConfig } from 'primeng/api';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';


@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss'],
  providers: [MessageService]

})
export class ViewComponent implements OnInit {

  constructor(private user:CustomerService, private router:Router,private messageService: MessageService,private primengConfig: PrimeNGConfig) { }
  ngOnInit(): void {
    this.customer=this.user.data;
    this.primengConfig.ripple = true;

  }

  
  
  showSuccess() {

    this.saveCustomer();
}


showError() {
  this.messageService.add({severity:'error', summary: 'Error', detail: 'You cannot Edit here'});
}


  saveCustomer(){
    this.goToEmployeeList();
  }
  
  goToEmployeeList() {
  this.router.navigate(['/customerlist']);
  }


public customer:Customer;



}
