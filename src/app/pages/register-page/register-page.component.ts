import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {

  UserModel=new User();
  constructor(private auth:AuthService) { }

  ngOnInit(): void {
  }
  onFormSubmit(){
    //console.log(this.UserModel)
    this.auth.register(this.UserModel).subscribe((response)=>{
      console.log(response)
    })
    
  }

}
