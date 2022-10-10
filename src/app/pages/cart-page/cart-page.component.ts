import { Component, OnInit } from '@angular/core';

import {Router} from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { DataService } from 'src/app/services/data.service';
@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {

  categories:any[]=[];
  carty:any[]=[];
  

  wi=localStorage.getItem('id');
  
  wc=localStorage.getItem('user');
    constructor(private dataService:DataService,private activatedroute:ActivatedRoute) {
      }
  
  

    ngOnInit(): void {
      this.dataService.getcart().subscribe((response:any)=>{
        this.categories=response
        
      console.log(this.categories)
        
      })
      this.dataService.getthecart().subscribe((response:any)=>{
        this.carty=response
        
      console.log(this.categories)
    })
    
    }



}
