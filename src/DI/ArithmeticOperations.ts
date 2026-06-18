import { Injectable } from "@angular/core";

@Injectable()
export class Operations{

    Addition(num1:any,num2:any){
       var result=Number(num1)+Number(num2);
       return result;
    }

    Subtraction(num1:any,num2:any){
        var result=Number(num1)-Number(num2);
        return result;
    }

    Multiplication(num1:any,num2:any){
        var result=Number(num1)*Number(num2);
        return result;
    }

    Division(num1:any,num2:any){
        var result=(Number(num1)/Number(num2)).toFixed(2);
        return result;
    }

}