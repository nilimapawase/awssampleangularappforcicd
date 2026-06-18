import { Routes } from "@angular/router";
import { LoginClass } from "./LoginComponent";
import { RegisterClass } from "./RegisterComponent";
import { DashboardClass } from "./DashboardComponent";
import { EmployeeClass } from "./EmployeeComponent";
import { StudentClass } from "./StudentComponent";
import { ExamClass } from "./ExamsComponent";
import { CerficationClass } from "./CertficationComponent";
export const CustomeRoutes :Routes=[
    {path:"login",component:LoginClass},
    {path:"register",component:RegisterClass},
    {path:'dashboard',component:DashboardClass},
    {path:'employee',component:EmployeeClass},
    {path:'student',component:StudentClass},
    {path:'exam',component:ExamClass},
    {path:'certification',component:CerficationClass}
];
