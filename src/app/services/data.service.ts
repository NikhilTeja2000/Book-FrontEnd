import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  wi=localStorage.getItem('id');
  constructor(private http:HttpClient) { }

  getHeader(): Observable<any[]>{
      return this.http.get<any[]>('http://localhost:5012/api/Toplist')
  }
  getcati(): Observable<any[]>{
    return this.http.get<any[]>('http://localhost:5012/api/Category')
}

getcatid(): Observable<any[]>{
  return this.http.get<any[]>('http://localhost:5012/api/Books/')
}

getwishlist(): Observable<any[]>{
  return this.http.get<any[]>(`http://localhost:5012/api/Wishlist`)
}
getBookscid(): Observable<any[]>{
  return this.http.get<any[]>(`http://localhost:5012/api/Books`)
}
dwish(userId:any): Observable<any[]>{
  return this.http.get<any[]>(`http://localhost:5012/api/Wishlist/${userId}`)
}
AddTowi(wi:any,catle:any,catim:any):Observable<any>{
  return this.http.post(`http://localhost:5012/api/Wishlist`,{userId:wi,title:catle,image:catim})
}
AddTocart(wi:any,catle:any,catim:any,catbn:any,catpri:any):Observable<any>{
  return this.http.post(`http://localhost:5012/api/Cart`,{userId:wi,title:catle,image:catim,isbn:catbn,price:catpri})
}
getthecart(): Observable<any[]>{
  return this.http.get<any[]>(`http://localhost:5012/api/Cart`)
}

getcart(): Observable<any[]>{
  return this.http.get<any[]>(`http://localhost:5012/api/Customerdetails`)
}
isbn:string='';
onSearchTextEntered(searchValue:string){
  this.isbn=searchValue;
  console.log(this.isbn);

}



}


