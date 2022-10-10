import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-wishlist-page',
  templateUrl: './wishlist-page.component.html',
  styleUrls: ['./wishlist-page.component.css']
})
export class WishlistPageComponent implements OnInit {
  categories:any[]=[];

  wi=localStorage.getItem('id');
  constructor(private dataService:DataService,private activatedroute:ActivatedRoute) {
    this.dataService.getwishlist().subscribe((response)=>{
      this.categories=response
      console.log(this.wi,"near wishlist")
      console.log(this.categories,"---wish list data--")
    })
  
    }


   
  
  ngOnInit(): void {
    
  }

}
