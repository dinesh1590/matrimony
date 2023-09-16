import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';
import { Usr } from '../usr';

@Component({
  selector: 'app-not-found',
  template: `

  <h1>oops page not found : 404 error</h1>


  `,
  styles: [
    
`
    h1 {
      padding-top:250px;
      font-family: sans-serif;
      font-size: 50px;
      width: 100%;
      text-align: center;
      color:#0e5ea2;
    }
`
  ]
})
export class NotFoundComponent implements OnInit {

  user: Usr = new Usr();
  constructor(private uservice: UserService,
    private router: Router) { }

  ngOnInit(): void {

  }
}




