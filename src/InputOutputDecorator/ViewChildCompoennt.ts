import { Component } from "@angular/core";

@Component({
    selector:'view-child',
    templateUrl:"ViewChild.html"
})

export  class ViewChildClass{

    counter:any=0;

    Increment(){
        this.counter++;
    }

    Decrement(){
        this.counter--;
    }
}