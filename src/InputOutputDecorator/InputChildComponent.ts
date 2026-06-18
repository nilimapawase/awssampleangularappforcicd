import { Component, Input } from "@angular/core";

@Component({
    selector:'input-child',
    templateUrl:"InputChild.html"
})

export class InputChildClass{
    // rno:any=10;
    // name:any="Ajay";

    @Input()
    rno:any;

    @Input()
    name:any;

    @Input()
    states:any=[];
}