import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
    selector:'app-root',
    templateUrl:'Add.html',
    imports:[FormsModule]
})

export class AddClass{

    num1:any;
    num2:any;
    result:any;

    addition(n1:any,n2:any){
        var c=Number(n1)+Number(n2);
        this.result=c;
        
    }

}