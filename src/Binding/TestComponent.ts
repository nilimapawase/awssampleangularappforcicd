import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
    selector:'app-root',
    templateUrl:'Test.html',
    imports:[FormsModule]
})

export class TestClass {
    rno:any;
    name:any;
}