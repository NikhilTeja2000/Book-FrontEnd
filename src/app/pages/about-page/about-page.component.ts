import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { DataService } from 'src/app/services/data.service';
@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.css']
})
export class AboutPageComponent implements OnInit {
  categories:any[]=[];
  constructor(private dataService:DataService,private router:Router) {
    this.dataService.getcati().subscribe((response:any)=>{
    this.categories=response
  }) }
    

  ngOnInit(): void {
    
  }
  
  
}
