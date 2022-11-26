import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usr } from './usr';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  
  getStudents() {
    return [{"id":1,"name":"rama","course":"angular"},
  {"id":2,"name":"sita","course":"java"},
  {"id":3,"name":"laxman","course":"react"}
    ];
  }
    
  private baseURL = "../assets/user.json";
 

  constructor(private httpClient: HttpClient) { }
  
  getEmployeesList(): Observable<Usr[]>{
    return this.httpClient.get<Usr[]>(`${this.baseURL}`);
  }

  public hh:Usr;

  createEmployee(user: Usr): Observable<any>{
    console.log(user)

    this.hh=user;


    return this.httpClient.post<Usr>(`${this.baseURL}`, user);
  }

  getEmployeeById(id: number): Observable<Usr>{
    return this.httpClient.get<Usr>(`${this.baseURL}/${id}`);
  }

  updateEmployee(id: number, employee: Usr): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, employee);
  }

  deleteEmployee(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}












  











  

