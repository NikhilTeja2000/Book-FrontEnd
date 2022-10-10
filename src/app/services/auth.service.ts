import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private Base_URL='http://localhost:5012/api'

  constructor(private http:HttpClient) { }

  register(data:any):Observable<any>{
    return this.http.post<any>(`${this.Base_URL}/Userdetails`,data)
  }
  
  login(data:any): Observable<any>{
    return this.http.post<any>(`${this.Base_URL}/Userdetails`,data)
  }
  
checkToken():boolean{
  if(localStorage.getItem('token')){
    return true;

  }else{
    return false;
  }
}
logout(){
  localStorage.clear();
}


}
