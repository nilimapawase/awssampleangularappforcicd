import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { PrimePipeClass } from "./PrimePipe";
import { AdditionPipeClass } from "./AdditionPipe";

@Component({
    selector:'app-root',
    templateUrl:'Custom.html',
    imports:[FormsModule,PrimePipeClass,AdditionPipeClass]
})

export class CustomPipeClass{

    num:any;
    
    start:any;
    end:any;

       ClearData()
    {
        this.num = "";
        this.start = "";
        this.end = "";
    }
    
}