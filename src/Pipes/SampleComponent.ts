import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { SquarePipeClass } from "./SquarePipe";
import { FormsModule } from "@angular/forms";
import { PowerPipeClass } from "./PowerPipe";

@Component({
    selector:'app-root',
    templateUrl:'Sample.html',
    imports:[CommonModule,SquarePipeClass,FormsModule,PowerPipeClass]
})

export class SampleClass{

    fname="ajay";
    lname="JADHAV";
    per=0.12;
    per1=0.12345;
    amount=5432;
    dt=new Date();
    data=[{"id":1,"name":"Ajay"},{"id":2,"name":"Rahul"},
    {"id":3,"name":"Raj"}
    ]
    n:any=7;

    num:any;
    pow:any;


}