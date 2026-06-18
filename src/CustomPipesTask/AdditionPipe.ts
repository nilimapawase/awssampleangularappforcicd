import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name:"additioninrange"})
export class AdditionPipeClass implements PipeTransform {
    transform(s:any,e:any):any{
        var sum=0;
        for(var i=s;i<=e;i++){
            sum=sum+Number(i);
        }
        return sum;
    }

    
}