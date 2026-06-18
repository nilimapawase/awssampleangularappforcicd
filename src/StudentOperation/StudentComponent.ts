import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { StudentModel } from "./StudentModel";

@Component({
    selector: 'app-root',
    templateUrl:'Student.html',
    imports:[FormsModule]
})
export class StudentClass {

    s=new StudentModel("","","","","","","","");

    studentlist:any=[];
    index=-1;
    btnstatus=false;

    Calculate(obj:any){
        this.s.Total=Number(obj.English)+Number(obj.Maths)+Number(obj.Science);
        this.s.Percentage=(this.s.Total/3).toFixed(2);
        if(this.s.Percentage>=60){
            this.s.Result="Pass";
        }
        else{
            this.s.Result="Fail";
        }
    }

    SubmitData(obj:any){
        this.studentlist.push(obj);
        this.ClearData();
    }

    ViewStudent(obj:any,index:any)
    {
        // console.log(obj);
        // console.log(index);
        this.index=index;
        // this.s=obj;
        this.s=new StudentModel(obj.RollNo,obj.StudentName,obj.English,obj.Maths,obj.Science,obj.Total,obj.Percentage,obj.Result);
        this.btnstatus=true;

    }

    UpdateData(obj:any){
        // console.log(obj);
        this.studentlist[this.index]=obj;
        this.ClearData();
    }

    DeleteData(index:any){
        if(confirm("Are you sure to delete this record?")){
        this.studentlist.splice(index,1);
        }
    }

    ClearData(){
        this.s=new StudentModel("","","","","","","","");
        this.btnstatus=false;
        this.index=-1;
    }




    // rno:any;
    // name:any;
    // english:any=0;
    // maths:any=0;
    // science:any=0;
    // total:any;
    // percentage:any;
    // result:any;
    // studentlist:any=[];

    // Calculate(e:any,m:any,s:any){
    //     var sum=Number(e)+Number(m)+Number(s);
    //     // console.log(sum);
    //     this.total=sum;
    //     this.percentage=(this.total/3).toFixed(2);
    //     if(this.percentage>=40){
    //         this.result="Pass";
    //     }
    //     else{
    //         this.result="Fail";
    //     }
    // }

    // SubmitData(r:any,n:any,e:any,m:any,s:any,t:any,p:any,r1:any){
    //     var st={"RollNo":r,"Name":n,"English":e,"Maths":m,"Science":s,"Total":t,"Percentage":p,"Result":r1};
    //     this.studentlist.push(st);
    //     alert("Data Added Successfully");
    //     this.ClearData();
    // }

    // ClearData(){
    //     this.rno="";
    //     this.name="";
    //     this.english="";
    //     this.maths="";
    //     this.science="";
    //     this.total="";
    //     this.percentage="";
    //     this.result="";
    // }
}