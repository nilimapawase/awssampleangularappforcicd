import {Pipe,PipeTransform} from '@angular/core';

@Pipe({name:"square"})
export class SquarePipeClass implements PipeTransform{
    transform(num:any):any{
        var d=num*num;
        return d;
    }
}