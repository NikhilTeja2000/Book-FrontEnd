import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  categories:any[]=[];
  constructor(private dataService:DataService) { }
    
  

  ngOnInit(): void {
    this.dataService.getHeader().subscribe((response:any)=>{
      this.categories=response
    })
  }

}
