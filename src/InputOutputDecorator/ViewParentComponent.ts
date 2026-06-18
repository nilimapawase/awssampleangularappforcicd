import { Component, ViewChild } from "@angular/core";
import { ViewChildClass } from "./ViewChildCompoennt";

@Component({
    selector:'app-root',
    templateUrl:"ViewParent.html",
    imports: [ViewChildClass]
})

export  class ViewParentClass{

    @ViewChild(ViewChildClass)
    ch=new ViewChildClass();
    
    Prev(){
        this.ch.Decrement();
    }

    Next(){
        this.ch.Increment();
    }

}