import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { Router, RouterModule } from "@angular/router";

@Component({
    selector:'app-root',
    templateUrl:"Common.html",
    imports: [RouterModule]
})

export class CommonClass{
    

     constructor(private pr: Router)
    {
        
    } 

    get isLogin()
    {
        return localStorage.getItem("username") != null;
    }

    get username()
    {
        return localStorage.getItem("username");
    }

    LogOut(){
        localStorage.removeItem("username");
        this.pr.navigate(["/login"]);
    }
}