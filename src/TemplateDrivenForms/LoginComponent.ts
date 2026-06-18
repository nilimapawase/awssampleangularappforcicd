import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
    selector:'app-root',
    templateUrl:'Login.html',
    imports:[FormsModule,CommonModule]
})

export class LoginFormClass{
    loginList:any=[];
    email:any;
    password:any;
    username:any;
    msg:any;
    errormsg:any;
    index:any=-1;

    SubmitData(e:any){
        //  console.log(e);
        //  if(e.email=="ciit@gmail.com" && e.password=="ciit1234")
        //  {
        //     this.msg="Login Success";
        //     this.errormsg="";
        //  }
        //  else{
        //     this.errormsg="Invalid email or password";
        //     this.msg="";
        //  }

        if(this.index==-1){
            this.loginList.push(e);
            this.msg = "Data added successfully";
        }
        else{
            this.loginList[this.index]=e;
            this.index=-1;
            this.msg = "Data updated successfully";
        }
        this.ClearData();
    }

    ClearData(){
        this.email="";
        this.password="";
        this.username="";
        this.msg="";
        this.errormsg="";
    }

    ViewLogin(e:any,i:any){
        this.index=i;
        this.username = e.username;
        this.email = e.email;
        this.password = e.password;
    }

    DeleteLogin(i:any){
        this.loginList.splice(i,1);
    }
}
