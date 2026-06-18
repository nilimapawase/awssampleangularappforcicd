import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { StudentService } from "./StudentApiService";
import { ApiUrl } from "./ApiUrl";
import { FormsModule } from "@angular/forms";
import { Student } from "./StudentModel";

@Component({
    selector: 'app-root',
    templateUrl: "Student.html",
    providers: [StudentService, ApiUrl],
    imports: [FormsModule]
})

export class StudentClass {

    students: any = [];
    s = new Student(0,"", "", "", "");
    btnstatus:any=false;

    // constructor(private http:HttpClient)
    // {
    //     this.fetchStudents();
    // }

    // fetchStudents()
    // {
    //     this.http.get("https://dummyapis.ciitstudent.com/api/student").subscribe(e=>{
    //         console.log(e);
    //         this.students=e;
    //     })
    // }

    constructor(private api: StudentService) {
        this.fetchStudents();
    }

    fetchStudents() {
        this.api.fetchStudents("/api/student").subscribe((e: any) => {
            // console.log(e);
            this.students = e;
        })
    }

    addStudent(st: any){
        this.api.addStudent("/api/student/",st).subscribe((e: any) => {
            // console.log(e);
            alert("Student Added Successfully");
            this.clearData();
            this.fetchStudents();
        })
    }

    viewStudent(st:any){
        // console.log(st);
        // this.s=st;
        this.s=new Student(st.studentId,st.studentName,st.mobileNumber,st.emailAddress,st.city);
        // console.log(this.s);
        this.btnstatus=true;
    }

    updateStudent(st:any){
        this.api.updateStudent("/api/student/",st).subscribe((e: any) => {
            // console.log(e);
            alert("Student Updated Successfully");
            this.clearData();
            this.fetchStudents();
        })
    }

    removeStudent(sid:any){
        this.api.deleteStudent("/api/student/"+sid).subscribe((e:any)=>{
            alert("Student Deleted Successfully");
            this.fetchStudents();
        })
    }

    clearData(){
        this.s=new Student(0,"", "", "", "");
        this.btnstatus=false;
    }
}





