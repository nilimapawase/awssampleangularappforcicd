import { CommonModule } from "@angular/common";
import {Component} from "@angular/core";
import { FormBuilder,FormGroup,Validators,Validator,ReactiveFormsModule } from "@angular/forms";
@Component({
    selector:'app-root',
    templateUrl:"Employee.html",
    imports:[ReactiveFormsModule,CommonModule]
})
export class EmployeeClass{
    
    employeeList:any=[];
    empform:any;
    index:any=-1;

    constructor(private fb:FormBuilder){
        this.generateNewForm();
    }

    generateNewForm(){
        this.empform=this.fb.group({
            // EmployeeName:["Ajay"],
            EmployeeName:[null,Validators.compose([Validators.required,Validators.minLength(2),Validators.maxLength(10)])],
            Age:[null,Validators.compose([Validators.required,Validators.min(18),Validators.max(30)])],
            Designation:[null,Validators.compose([Validators.required])],
            // Designation:["Tester"],
            EmailAddress:[null,Validators.compose([Validators.required,Validators.email])],
            // MobileNumber:[null,Validators.compose([Validators.required,Validators.pattern("[0-9]{10}")])]
            MobileNumber:[null,Validators.compose([Validators.required,Validators.pattern("[7-9][0-9]{9}")])]
        })
    }

    SubmitData(e:any){
        // console.log(e);
        if(this.index==-1){
            this.employeeList.push(e);
        }
        else{
            this.employeeList[this.index]=e;
            this.index=-1;
        }
        this.generateNewForm();
    }

    ViewEmployee(e:any,i:any){
        this.index=i;
        this.empform=this.fb.group({
            // EmployeeName:["Ajay"],
            EmployeeName:[e.EmployeeName,Validators.compose([Validators.required,Validators.minLength(2),Validators.maxLength(10)])],
            Age:[e.Age,Validators.compose([Validators.required,Validators.min(18),Validators.max(30)])],
            Designation:[e.Designation,Validators.compose([Validators.required])],
            // Designation:["Tester"],
            EmailAddress:[e.EmailAddress,Validators.compose([Validators.required,Validators.email])],
            // MobileNumber:[null,Validators.compose([Validators.required,Validators.pattern("[0-9]{10}")])]
            MobileNumber:[e.MobileNumber,Validators.compose([Validators.required,Validators.pattern("[7-9][0-9]{9}")])]
    });
}

RemoveEmployee(i:any){
    this.employeeList.splice(i,1);
}

}