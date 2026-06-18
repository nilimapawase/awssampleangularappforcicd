import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserModel } from './UserModel';
import { Router } from '@angular/router';

@Component({
    selector:'app-login',
    standalone:true,
    imports:[FormsModule],
    templateUrl:'./Login.html'
})

export class LoginComponent
{
    constructor(private router:Router)
    {
    }
    email:string="";
    password:string="";

    Login()
{
    let data=localStorage.getItem(this.email);

    if(data==null)
    {
        alert("User Not Found");
        return;
    }

    let user:UserModel=JSON.parse(data);

    if(user.password==this.password)
    {
        alert("Login Successful");

        this.router.navigate(['/home']);
    }
    else
    {
        alert("Invalid Password");
    }
}
}