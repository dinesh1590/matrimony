// banner.component.ts
import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  constructor() { }

  public items: MenuItem[];

  image='img';

    ngOnInit() {
        this.items = [
            {
                label:'Home',
                routerLink:['home'],
                icon:'pi pi-fw pi-home',
            },
           
            {
                label:'Users',
                icon:'pi pi-fw pi-user',
                items:[
                    {
                        label:'Register',
                        routerLink:['/newform'],
                        icon:'pi pi-fw pi-user-plus',

                    },
                    {
                        label:'Photos',
                        routerLink:['/photos'],
                        icon:'pi pi-fw pi-search',
                        
                    },
                    {
                        label:'Display',
                        routerLink:['/customerlist'],
                        icon:'pi pi-fw pi-users',
                    }
                ]
            },
            {
                label:'Events',
                icon:'pi pi-fw pi-calendar',
                items:[
                    {
                        label:'business',
                        routerLink:['business'],
                        icon:'pi pi-fw pi-calendar-times',
                    }
                ]
            },
           
        ];
    }    
}

