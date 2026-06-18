import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector:'app-root',
    template:`<h2>Contact Us Page</h2>
     <h4>Employee Id= {{st.empid}}</h4>
    <h4>Employee Name= {{st.empname}}</h4>`
})

export class ContactUsClass{
    st:any;
    constructor(private rt:ActivatedRoute){
        // this.st=this.rt.params;
        this.rt.params.subscribe((e:any)=>{
            // console.log(e);
            this.st=e;
        })
    }
}