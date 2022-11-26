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
                routerLink:['/home'],
                icon:'pi pi-fw pi-home',
            },
           
            {
                label:'Users',
                icon:'pi pi-fw pi-user',
                items:[
                    {
                        label:'Register',
                        routerLink:['/form'],
                        icon:'pi pi-fw pi-user-plus',

                    },
                    {
                        label:'Search',
                        routerLink:['/search'],
                        icon:'pi pi-fw pi-search',
                        
                    },
                    {
                        label:'Display',
                        routerLink:['/display'],
                        icon:'pi pi-fw pi-users',
                    }
                ]
            },
            {
                label:'Events',
                icon:'pi pi-fw pi-calendar',
                items:[
                    {
                        label:'Edit',
                        icon:'pi pi-fw pi-pencil',
                        items:[
                        {
                            label:'Save',
                            icon:'pi pi-fw pi-calendar-plus'
                        },
                        {
                            label:'Delete',
                            icon:'pi pi-fw pi-calendar-minus'
                        },

                        ]
                    },
                    {
                        label:'Archieve',
                        icon:'pi pi-fw pi-calendar-times',
                        items:[
                        {
                            label:'Remove',
                            icon:'pi pi-fw pi-calendar-minus'
                        }
                        ]
                    }
                ]
            },
           
        ];
    }    
}

