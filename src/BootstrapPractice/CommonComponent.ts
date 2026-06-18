import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
    selector:'app-root',
    imports:[RouterOutlet,RouterLink],
    templateUrl:'./Common.html'
})
export class CommonClass
{
}