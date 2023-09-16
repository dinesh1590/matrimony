import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from './customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private baseURL = "../assets/customer.json";

  constructor(private httpClient: HttpClient) { }
  
  getCustomersList(): Observable<Customer[]>{
    return this.httpClient.get<Customer[]>(`${this.baseURL}`);
  }

  public data:Customer=new Customer;

  createCustomer(user: Customer): Observable<Customer>{

    console.log(user.email)
    
    this.data.firstName=user.firstName;
    this.data.lastName=user.lastName;
    this.data.email=user.email;
    this.data.dob=user.dob;
    this.data.acceptTerms=user.acceptTerms;
    this.data.gender=user.gender;
    this.data.location=user.location;
    this.data.phone=user.phone;

    console.log(this.data)

     return this.httpClient.post<Customer>(`${this.baseURL}`, user);
    ;
  }

  
}




























