import { Component } from "@angular/core";
import { RouterLink, RouterModule, RouterOutlet } from "@angular/router";

@Component({
    selector:'app-root',
    template:`
    <h2>About Us Page</h2>
    <div>
        <a routerLink="/about-us/company">About Company</a>&nbsp;&nbsp;
        <a routerLink="/about-us/employee">About Employee</a>

        <!-- <a routerLink="company">About Company</a>&nbsp;
        <a routerLink="employee">About Employee</a>&nbsp; -->
    </div>
    <hr/>
    <div>
        <router-outlet></router-outlet>
    </div>
    `,
    // imports: [RouterLink, RouterOutlet]
    imports:[RouterModule]
})

export class AboutUsClass{
    
}