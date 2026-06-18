import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name:"prime"})
export class PrimePipeClass implements PipeTransform{
    transform(s:any,n:any):any{
        if(!n)
        {
            return "";
        }
        if(n<=1)
        {
            return n+" Number is not Prime";
        }
        var data="";

        for(var i=s;i<=n;i++)
        {
            var count=0;
            for(var j=2;j<=i/2;j++)
            {
                if(i%j==0)
                {
                    count++;
                    break;
                }
            }
            if(count==0)
            {
                data+=i+" ";
            }
        }
        return data;
    }
}