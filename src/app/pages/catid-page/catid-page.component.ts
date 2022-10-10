import { Component, OnInit } from '@angular/core';

import {Router} from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-catid-page',
  templateUrl: './catid-page.component.html',
  styleUrls: ['./catid-page.component.css']
})
export class CatidPageComponent implements OnInit {
  categories:any[]=[];
cartt:any[]=[]
    constructor(private dataService:DataService,private activatedroute:ActivatedRoute,private router: Router) {
      }
  
  
      public href: string = "";
    
    ngOnInit(): void {
      this.dataService.getBookscid().subscribe((response:any)=>{
        this.categories=response
        
        this.href = this.router.url;
        console.log(this.router.url);
        console.log('ok')
        this.href=this.href.substring(this.href.lastIndexOf('/') + 1)
        console.log('------------')
        console.log(this.href);
        console.log('@@@@@@@@@@@@@')
        
      console.log(this.categories)
        
      })

}
}
