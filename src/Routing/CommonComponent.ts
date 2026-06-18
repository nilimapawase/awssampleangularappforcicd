import { Component } from "@angular/core";
import {RouterLink, RouterModule, RouterOutlet } from "@angular/router";
import { GuardServiceClass } from "./GuardService";
import { ChildGuardService } from "./ChildGuardService";

@Component({
    selector:'app-root',
    templateUrl:'Common.html',
    // imports:[RouterLink,RouterOutlet],
    imports: [RouterModule],
    // providers:[GuardServiceClass]
    // providers:[ChildGuardService]
})

export class CommonClass{
    
}