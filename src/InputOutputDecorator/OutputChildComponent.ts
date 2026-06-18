import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector:'output-child',
    templateUrl:"OutputChild.html",
})

export class OutputChildClass{

    // cnt:any=0;

    @Input()
    btnlabel:any;

    @Input()
    btnclass:any;

    @Output()
    btnsubmit=new EventEmitter();

    // Increment(){
    //     this.cnt++;
    //     this.btnsubmit.emit(this.cnt);
    // }

    Increment(){
        this.btnsubmit.emit("You have Clicked on "+this.btnlabel);
    }
}