import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { Operations } from "./ArithmeticOperations";

@Component({
    selector:'app-root',
    templateUrl:'Arithmetic.html',
    imports:[FormsModule],
    providers:[Operations] //register the service/Operation.
})
export class ArithmeticClass{
    
    num1:any;
    num2:any;
    result:any;

    constructor(private op:Operations){
     }

    Add(n1:any,n2:any){
        this.result=this.op.Addition(n1,n2);
    }

    Sub(n1:any,n2:any){
        this.result=this.op.Subtraction(n1,n2);
    }

    Mul(n1:any,n2:any){
        this.result=this.op.Multiplication(n1,n2);
    }

    Div(n1:any,n2:any){
        this.result=this.op.Division(n1,n2);
    }
}