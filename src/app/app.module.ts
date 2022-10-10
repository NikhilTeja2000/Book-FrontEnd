import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { Add1Component } from './components/add1/add1.component';
import { Add2Component } from './components/add2/add2.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { WishlistPageComponent } from './pages/wishlist-page/wishlist-page.component';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { CatidPageComponent } from './pages/catid-page/catid-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    Add1Component,
    Add2Component,
    HomePageComponent,
    SearchPageComponent,
    AboutPageComponent,
    WishlistPageComponent,
    CartPageComponent,
    ErrorPageComponent,
    RegisterPageComponent,
    LoginPageComponent,
    CatidPageComponent
  ],
  imports: [
    BrowserModule,HttpClientModule,AppRoutingModule,FormsModule,ReactiveFormsModule,Ng2SearchPipeModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
