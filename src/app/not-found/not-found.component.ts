import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';
import { Usr } from '../usr';

@Component({
  selector: 'app-not-found',
  template: `
  <div class="not">

  <h1>oops page not found : 404 error</h1>
  </div>


  <div class="col-md-6 offset-md-3">
    <h3> Create Employee </h3>
    <form (ngSubmit) = "onSubmit()">
    
        <div class="form-group">
            <label> First Name</label>
            <input type="text" class ="form-control" id = "firstName"
                [(ngModel)] = "user.fname" name = "firstName">
        </div>
    
        <div class="form-group">
            <label> Last Name</label>
            <input type="text" class ="form-control" id = "lastName"
                [(ngModel)] = "user.lname" name = "lastName">
        </div>
    
        <div class="form-group">
            <label> Email Id</label>
            <input type="text" class ="form-control" id = "emailId"
                [(ngModel)] = "user.email" name = "emailId">
        </div>

        <div class="form-group">
            <label> Password </label>
            <input type="text" class ="form-control" id = "password"
                [(ngModel)] = "user.password" name = "password">
        </div>
    
        <button class = "btn btn-success" type ="submit">Submit</button>
    
    </form>
    </div> 

  `,
  styles: [
    
  ]
})
export class NotFoundComponent implements OnInit {

  user: Usr = new Usr();
  constructor(private uservice: UserService,
    private router: Router) { }

  ngOnInit(): void {

  }

  
  saveEmployee(){
      this.goToEmployeeList();
  }

  goToEmployeeList() {
    this.router.navigate(['/display']);
  }
  
  onSubmit() {

    this.uservice.createEmployee(this.user);

    console.log(this.user);
    this.saveEmployee();
  }
}




