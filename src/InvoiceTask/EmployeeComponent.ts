import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { Service } from "./Service";
import { ApiUrl } from "./ApiUrl";
import { EmployeeModel } from "./EmployeeModel";

@Component({
    selector:'app-root',
    templateUrl:"Employee.html",
    providers: [Service, ApiUrl],
    imports: [FormsModule]
})

export class EmployeeClass{

     employees: any = [];
        e = new EmployeeModel(0,"", "", "", "","");
        btnstatus:any=false;
    
        // constructor(private http:HttpClient)
        // {
        //     this.fetchEmployees();
        // }
    
        // fetchEmployees()
        // {
        //     this.http.get("https://localhost:7210/api/employee").subscribe(e=>{
        //         console.log(e);
        //         this.employees=e;
        //     })
        // }
    
        constructor(private api: Service) {
            this.fetchEmployees();
        }
    
        fetchEmployees() {
            this.api.fetch("/api/employee").subscribe((e: any) => {
                // console.log(e);
                this.employees = e;
            })
        }
    
        addEmployee(emp: any){
            this.api.add("/api/employee/",emp).subscribe((e: any) => {
                // console.log(e);
                alert("Employee Added Successfully");
                this.clearData();
                this.fetchEmployees();
            })
        }
    
        viewEmployee(emp:any){
            // console.log(emp);
            // this.e=emp;
            this.e=new EmployeeModel(emp.employeeId,emp.employeeName,emp.emailAddress,emp.employeeCode,emp.password,emp.designation);
            // console.log(this.e);
            this.btnstatus=true;
        }
    
        updateEmployee(emp:any){
            this.api.update("/api/employee/",emp).subscribe((e: any) => {
                // console.log(e);
                alert("Employee Updated Successfully");
                this.clearData();
                this.fetchEmployees();
            })
        }
    
        removeEmployee(eid:any){
            this.api.delete("/api/employee/"+eid).subscribe((e:any)=>{
                alert("Employee Deleted Successfully");
                this.fetchEmployees();
            })
        }
    
        clearData(){
            this.e=new EmployeeModel(0,"", "", "", "","");
            this.btnstatus=false;
        }
    
}