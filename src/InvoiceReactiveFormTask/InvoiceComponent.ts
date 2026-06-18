import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { FormBuilder,FormGroup,Validators,Validator } from "@angular/forms";

@Component({
    selector:'app-root',
    templateUrl:"Invoice.html",
    imports:[ReactiveFormsModule,CommonModule]
})

export class InvoiceClass{
    invoiceList:any=[];
    invform:any;
    index:any=-1;
    TotalAmount:any=0;

    constructor(private fb:FormBuilder){
        this.generateNewInvoice();
    }

    generateNewInvoice(){
        this.invform=this.fb.group({
            // ProductName:["Pencil"],
            ProductName:[null,Validators.compose([Validators.required,Validators.pattern("[a-zA-Z]*")])],
            Rate:[null,Validators.compose([Validators.required,Validators.min(1)])],
            GST:[null,Validators.compose([Validators.required,Validators.min(0),Validators.max(100)])],
            Quantity:[null,Validators.compose([Validators.required,Validators.min(1)])],
        })
    }

    SubmitData(e:any){
        // console.log(e);
        if(this.index==-1){
            this.invoiceList.push(e);
        }
        else{
            this.invoiceList[this.index]=e;
            this.index=-1;
        }
        this.CalculateGrandTotal();
        this.generateNewInvoice();
    }

    ViewInvoice(e:any,i:any){
        this.index=i;
        this.invform=this.fb.group({
            // ProductName:["Pencil"],
            ProductName:[e.ProductName,Validators.compose([Validators.required,Validators.minLength(2),Validators.maxLength(10),Validators.pattern("[a-zA-Z]*")])],
            Rate:[e.Rate,Validators.compose([Validators.required,Validators.min(1)])],
            GST:[e.GST,Validators.compose([Validators.required,Validators.min(1),Validators.max(100)])],
            Quantity:[e.Quantity,Validators.compose([Validators.required])],
    });
}

    RemoveInvoice(i:any){
        this.invoiceList.splice(i,1);
        this.CalculateGrandTotal();
    }

    CalculateGrandTotal(){
        this.TotalAmount=0;

        for(var t of this.invoiceList){
            var total= t.Rate*t.Quantity;
            var gstAmount=total*t.GST/100;

            this.TotalAmount+=total+gstAmount;
        }
    }



}