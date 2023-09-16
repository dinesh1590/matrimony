import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { Response } from '../response';
import { User } from '../user';
import Validation from '../validation';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {

  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
  });



  submitted = false;
  public response:Response


  constructor(private formBuilder: FormBuilder,private _usr: EmployeeService, private router: Router) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        username: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(20),
          ],
        ],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(8),
            Validators.maxLength(40),
            Validators.pattern(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&^_-]).{8,}/),
          ],
         ],
        confirmPassword: ['', Validators.required],
      },
      {
        validators: [Validation.match('password', 'confirmPassword')],
      }
    );
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    console.log(this.form.value);
    this.setData();
    this.saveEmployee();

  }



  redirect() {
    this.router.navigate(['/login'])
  }
  public user:User =new User;
  
    userForm: FormGroup = new FormGroup({
  
      username: new FormControl(''),
      password: new FormControl(''),
      confirmPassword: new FormControl(''),

      
    });
  
  public msg:string;
  
  setData() {
    this.user.username=this.form.value.username;
    this.user.password=this.form.value.password;

  }
 
  saveEmployee(){

    this._usr.createUser(this.user).subscribe( data => {this.response=data;
    this.check();
  },
     error => console.log(error));
  }

  check() {
    if(this.response.message==="successful") {
      this.goToEmployeeList();
      }
      else{
      this.msg=this.response.message;

      console.log(this.msg);
      }
  }
  
      goToEmployeeList(){
        this.router.navigate(['/login']);
      }
      
      onSubmit1(){
        console.log(this.form.value);
        this.setData();
        this.saveEmployee();
      }
  }
  

