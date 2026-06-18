import { Component } from "@angular/core";
import { InputChildClass } from "./InputChildComponent";

@Component({
    selector:'app-root',
    templateUrl:"InputParent.html",
    imports: [InputChildClass]
})

export class InputParentClass{
    
    data:any=[
        {'state_id':1,'state_name':'Maharashtra'},
        {'state_id':2,'state_name':'Gujrat'},
        {'state_id':3,'state_name':'Karnataka'},
        {'state_id':4,'state_name':'Kerala'},
        {'state_id':5,'state_name':'Punjab'}
    ]
    
}