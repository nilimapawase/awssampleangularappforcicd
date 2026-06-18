// import { Routes } from "@angular/router";
// import { LoginComponent } from "./LoginComponent";
// import { RegisterComponent } from "./RegisterComponent";

// export const MyRoutes:Routes=[
//     {path:"login",loadComponent:()=>import("./LoginComponent").then(e=>e.LoginComponent)},
//     {path:"register",loadComponent:()=>import("./RegisterComponent").then(e=>e.RegisterComponent)}
// ]


import { Routes } from '@angular/router';
import { LoginComponent } from './LoginComponent';
import { RegisterComponent } from './RegisterComponent';
import { HomeComponent } from './HomeComponent';

export const MyRoutes:Routes=
[
    {
        path:'',
        redirectTo:'login',
        pathMatch:'full'
    },
    {
        path:'login',
        component:LoginComponent
    },
    {
        path:'register',
        component:RegisterComponent
    },
    {
        path:'home',
        component:HomeComponent
    }
];