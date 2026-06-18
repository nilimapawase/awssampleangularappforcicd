import { Component } from "@angular/core";

@Component({
    selector:'app-root',
    templateUrl:"Sample.html"
})

export class Simple{

    a:any=10;
    b:any=20;

    name:any="Ajay";
    age:any=21;


    st={"StudentId":1,"StudentName":"Ajay","StudentAge":21,"Percentage":90};

    data:any=[10,20,30,40,50];

    data1:any=[{"StudentId":1,"StudentName":"Ajay","StudentAge":21},
        {"StudentId":2,"StudentName":"Akshay","StudentAge":22},];
    // c:any=0;

    // add(a:any,b:any){
    //     this.c=Number(a)+Number(b);
    // }
    
}