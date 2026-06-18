import { Pipe, PipeTransform } from "@angular/core";

@Pipe({name:"power"})
export class PowerPipeClass implements PipeTransform{

    transform(n:any,p:any):any{
        var d=Math.pow(n,p);
        return d;
    }
}