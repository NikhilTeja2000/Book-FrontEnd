import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';

import { FormGroup,FormControl,FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {

  categories:any[]=[];
  categorie:any[]=[];
  cart: any;
  usercartservice: any;
  router: any; 
  title = 'custom-search-filter-example';
  searchedKeyword!: string;
  
  wi=localStorage.getItem('id');

  constructor(private dataService:DataService,private activatedroute:ActivatedRoute) {
    
    }
   
   

  ngOnInit(): void {
    this.dataService.getcatid().subscribe((response:any)=>{
      this.categories=response
      
    })
  
    
  }
  
     
  OnClick(catle:any,catim:any){
    console.log(this.wi,"**for wishlist**")
    console.log(this.wi,catle,catim);
    
    console.log("---------------");
    this.dataService.AddTowi(this.wi,catle,catim).subscribe((response:any)=>{
      console.log(response);
    console.log(this.wi,catle,catim);
  })
}
OnClicks(catle:any,catim:any,catbn:any,catpri:any){
  console.log(this.wi,"**for cart**")
  console.log(this.wi,catle,catim,catbn,catpri);
  this.dataService.AddTocart(this.wi,catle,catim,catbn,catpri).subscribe((response:any)=>{
    console.log(response);
  console.log(this.wi,catle,catim);
})
  
  console.log("---------------");
  
}
 

 

  
}
