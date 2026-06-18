import { Routes } from "@angular/router";
import { LoginClass } from "./LoginComponent";
import { RegisterClass } from "./RegisterComponent";
import { DashboardClass } from "./DashboardComponent";
import { CustomerClass } from "./CustomerComponent";
import { ProductClass } from "./ProductComponent";
import { InvoiceClass } from "./InvoiceComponent";
import { EmployeeClass } from "./EmployeeComponent";
export const CustomeRoutes :Routes=[
    {path:"login",component:LoginClass},
    {path:"register",component:RegisterClass},
    {path:'dashboard',component:DashboardClass},
    {path:'invoice',component:InvoiceClass},
    {path:'customer',component:CustomerClass},
    {path:'product',component:ProductClass},
    {path:'employee',component:EmployeeClass},

];
