import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
    selector:'app-root',
    // template:"<h2>Home Page</h2>"
    templateUrl:'Home.html',
    imports:[FormsModule]
})

export class HomeClass{
    eid:any;
    ename:any;

    constructor(private rt:Router){

    }
    SubmitData(){
        // console.log(this.eid);
        // console.log(this.ename);
        // this.rt.navigateByUrl("/services/"+this.eid+"/"+this.ename);
        this.rt.navigateByUrl("/contact-us/"+this.eid+"/"+this.ename);

    }
}