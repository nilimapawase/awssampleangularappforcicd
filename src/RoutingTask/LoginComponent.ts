import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
    selector:'app-root',
    templateUrl:"Login.html",
    imports:[FormsModule]
})

export class LoginClass{

    email:any;
    password:any;
    msg:any;
    errormsg:any;

    constructor(private fb:Router){

    }

    SubmitData(e:any){
        // console.log(e);
        if(e.email=="ciit@gmail.com" && e.password=="1234")
        {
            localStorage.setItem("username",e.email);
            this.fb.navigate(["/dashboard"])
            // this.msg="";
            // this.msg="Login Success";
            // this.errormsg="";
        }
        else
        {
            this.errormsg="Invalid email or password";
            this.msg="";
        }
    }
}