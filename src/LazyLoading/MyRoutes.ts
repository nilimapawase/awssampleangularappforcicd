import { Routes } from "@angular/router";
import { HomeClass } from "./HomeComponent";
import { AboutUsClass } from "./AboutUsComponent";

// export const MyRoutes:Routes=[
//     {path:"home",component:HomeClass},
//     {path:"about-us",component:AboutUsClass}
// ]

export const MyRoutes:Routes=[
    {path:"home",loadComponent:()=>import("./HomeComponent").then(e=>e.HomeClass)},
    {path:"about-us",loadComponent:()=>import("./AboutUsComponent").then(e=>e.AboutUsClass)}
]
