import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-newform',
  templateUrl: './newform.component.html',
  styleUrls: ['./newform.component.scss'],
  providers: [MessageService]

})
export class NewformComponent implements OnInit {
 
constructor(private fb:FormBuilder,private service:CustomerService, private router: Router,private messageService: MessageService) {}

  userForm: FormGroup = new FormGroup({

    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
    gender: new FormControl(''),
    dob: new FormControl(''),
    location: new FormControl(''),
    acceptTerms: new FormControl('')
  });

ngOnInit(): void {
   
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
      phone: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      gender:['',Validators.required],
      dob: ['', Validators.required],
      location:['',Validators.required],
      acceptTerms: [false, Validators.requiredTrue],
    },
  );
}


City: any = ['Mumbai', 'Hyderabad', 'Chennai', 'Bengaluru','Delhi','Kolkata','Lucknow','Pune','Jaipur','Patna'];

submitted = false;


showSuccess() {
  this.messageService.add({severity:'success', summary: 'Success', detail: 'Message Content'});
}



onSubmit(): void {
  this.submitted = true;

  this.service.createCustomer(this.userForm.value)

  if (this.userForm.invalid) {
    return;
  }
  
  console.log(JSON.stringify(this.userForm.value, null, 2));

  this.saveCustomer();
}

saveCustomer(){
  this.goToEmployeeList();
}

goToEmployeeList() {
this.router.navigate(['/customerlist']);
}

back() {
  this.router.navigate(['/home'])
}
}







 