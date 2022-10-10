/*import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}*/
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnInit {
  // loginForm = new FormGroup({
  //   email: new FormControl('abc@gmail.com'),
  //   password: new FormControl('123')
  // })

  loginResponse = ''
  loginClass = ''

  constructor(private fb: FormBuilder, private authService: AuthService,private router:Router) { }

  loginForm = this.fb.group({
    name: [null, [Validators.required]],
    password: [null, [Validators.required, Validators.minLength(6)]],
  });

  get name() {
    return this.loginForm.get('name');
  }

  get password() {
    return this.loginForm.get('password');
  }

  ngOnInit(): void { }

  onSubmitHandler() {
    this.authService.login(this.loginForm.value).subscribe(
      (response) => {
        
        console.log(response);
        this.loginResponse = "login successfully, thank you"
        this.loginClass = 'alert-success'
        
        localStorage.setItem('id',JSON.stringify(response.id))
        localStorage.setItem('token',response.token)
        console.log(localStorage.getItem('id'))
        localStorage.setItem('user',JSON.stringify(response.name))
        this.router.navigateByUrl('home')

      },
      (error) => {
        //console.log(error)
        this.loginResponse = "login failed, try again"
        this.loginClass = 'alert-danger'
      }
    );
  }
}