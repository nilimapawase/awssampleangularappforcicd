// import { Routes } from "@angular/router";
// import { HomeClass } from "./HomeComponent";
// import { AboutUsClass } from "./AboutUsComponent";
// import { ContactUsClass } from "./ContactUscomponent";
// import { ServicesClass } from "./ServicesComponent";
// export const CustomeRoutes:Routes=[
//     {path:"",component:HomeClass},
//     {path:"about-us",component:AboutUsClass},
//     {path:"contact-us",component:ContactUsClass},
//     {path:"services",component:ServicesClass}
// ]


import { Routes } from "@angular/router";
import { HomeClass } from "./HomeComponent";
import { AboutUsClass } from "./AboutUsComponent";
import { ContactUsClass } from "./ContactUscomponent";
import { ServicesClass } from "./ServicesComponent";
import { Companyclass } from "./CompanyComponent";
import { EmployeeClass } from "./EmployeeComponent";
import { GuardServiceClass } from "./GuardService";
import { ChildGuardService } from "./ChildGuardService";
export const CustomeRoutes:Routes=[
    {path:"",component:HomeClass},
    // {path:"about-us",component:AboutUsClass,canActivate:[GuardServiceClass],children:[
    //     {path:"company",component:Companyclass},
    //     {path:"employee",component:EmployeeClass}
    // ]},

     {path:"about-us",component:AboutUsClass,canActivateChild:[ChildGuardService],children:[
        {path:"company",component:Companyclass},
        {path:"employee",component:EmployeeClass}
    ]},
    {path:"contact-us",component:ContactUsClass},
    {path:"contact-us/:empid/:empname",component:ContactUsClass},
    {path:"services/:empid/:empname",component:ServicesClass}
]