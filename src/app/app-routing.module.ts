import { NgModule } from "@angular/core";
import{RouterModule,Routes}from '@angular/router';
import { BrowserModule } from "@angular/platform-browser";


import { AuthGuard } from './guard/auth.guard';
import { AboutPageComponent } from "./pages/about-page/about-page.component";
import { CartPageComponent } from "./pages/cart-page/cart-page.component";
import { CatidPageComponent } from "./pages/catid-page/catid-page.component";
import { ErrorPageComponent } from "./pages/error-page/error-page.component";
import { HomePageComponent } from "./pages/home-page/home-page.component";
import { LoginPageComponent } from "./pages/login-page/login-page.component";
import { RegisterPageComponent } from "./pages/register-page/register-page.component";
import { SearchPageComponent } from "./pages/search-page/search-page.component";
import { WishlistPageComponent } from "./pages/wishlist-page/wishlist-page.component";




const routes:Routes=[
    {path:'',redirectTo:'home',pathMatch:'full'},
    {path:'home',component:HomePageComponent},
    {path:'about',component:AboutPageComponent},
    {path:'cart',component:CartPageComponent,canActivate:[AuthGuard]},
    {path:'wishlist',component:WishlistPageComponent,canActivate:[AuthGuard]},
    {path:'search',component:SearchPageComponent,canActivate:[AuthGuard]},
    {path:'books/1',component:CatidPageComponent,canActivate:[AuthGuard]},
    {path:'books/2',component:CatidPageComponent,canActivate:[AuthGuard]},
    {path:'books/3',component:CatidPageComponent,canActivate:[AuthGuard]},
    {path:'books/4',component:CatidPageComponent,canActivate:[AuthGuard]},
    
    {path:'books/6',component:CatidPageComponent,canActivate:[AuthGuard]},
    {path:'register',component:RegisterPageComponent},
    {path:'login',component:LoginPageComponent},
    {path:'**',component:ErrorPageComponent}
]
@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule{

}