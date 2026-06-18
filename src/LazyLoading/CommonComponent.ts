import { Component } from "@angular/core";
import { RouterLink, RouterModule, RouterOutlet } from "@angular/router";

@Component({
    selector:"app-root",
    templateUrl:"Common.html",
    // imports:[RouterModule],
    imports:[RouterLink,RouterOutlet]
})
export class CommonClass{
    
}