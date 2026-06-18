import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserModel } from './UserModel';
import { Router } from '@angular/router';

@Component({
    selector:'app-register',
    standalone:true,
    imports:[FormsModule],
    templateUrl:'./Register.html'
})

export class RegisterComponent
{
    user:UserModel=new UserModel();

    constructor(private router:Router)
    {
    }

    Register()
    {
        localStorage.setItem(
            this.user.email,
            JSON.stringify(this.user)
        );

        alert("Registration Successful");

        this.router.navigate(['/login']);
    }
}