import { Component } from "@angular/core";
import { OutputChildClass } from "./OutputChildComponent";

@Component({
    selector:'app-root',
    templateUrl:"OutputParent.html",
    imports: [OutputChildClass]
})

export class OutputParentClass{

    counter:any;

    Show(c:any){
        this.counter=c;
    }

}