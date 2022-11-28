import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {

  constructor(private fb:FormBuilder,private service:CustomerService, private router: Router,) {}

  userForm: FormGroup = new FormGroup({

    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    
  });

  public dd:Customer;

ngOnInit(): void {

  this.dd=this.service.data;
   
  this.userForm = this.fb.group(
    {

      firstName: [
        '',
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(20),
        ],
      ],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    },
  );
}




submitted = false;

onSubmit() {

  this.dd.firstName=this.userForm.value.firstName;
  this.dd.lastName=this.userForm.value.lastName;
  this.dd.email=this.userForm.value.email;

  this.saveCustomer();
  
}

saveCustomer(){
  this.goToEmployeeList();
}

goToEmployeeList() {
this.router.navigate(['/customerlist']);
}

back() {
  this.saveCustomer();
}


}
