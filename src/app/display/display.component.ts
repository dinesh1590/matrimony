import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { Usr } from '../usr';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})

export class DisplayComponent implements OnInit {

  public data:Usr;

  public user=[];



  constructor(private _usr:UserService,private router: Router) {
    
   }

  ngOnInit(): void {
   
 this.getEmployees();
  }





  private getEmployees() {
    this._usr.getEmployeesList().subscribe(data => {this.user=data});

    this.data=this._usr.hh;
  }



  employees: Usr[];


update() {
  this.router.navigate(['/ghg']);
}


}

