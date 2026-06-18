import { Component } from "@angular/core";
import { Service } from "./Service";
import { ApiUrl } from "./ApiUrl";
import { FormsModule } from "@angular/forms";
import { CustomerModel } from "./CustomerModel";

@Component({
    selector:'app-root',
    templateUrl:"Customer.html",
    providers: [Service, ApiUrl],
    imports: [FormsModule]
})

export class CustomerClass{

     customers: any = [];
        c = new CustomerModel(0,"", "", "");
        btnstatus:any=false;
    
        // constructor(private http:HttpClient)
        // {
        //     this.fetch();
        // }
    
        // fetch()
        // {
        //     this.http.get("https://localhost:7210/api/customer").subscribe(e=>{
        //         console.log(e);
        //         this.cutomers=e;
        //     })
        // }
    
        constructor(private api: Service) {
            this.fetchCustomers();
        }
    
        fetchCustomers() {
            this.api.fetch("/api/customer").subscribe((e: any) => {
                // console.log(e);
                this.customers = e;
            })
        }
    
        addCustomer(ctm: any){
            this.api.add("/api/customer/",ctm).subscribe((e: any) => {
                // console.log(e);
                alert("Customer Added Successfully");
                this.clearData();
                this.fetchCustomers();
            })
        }
    
        viewCustomer(ctm:any){
            // console.log(ctm);
            // this.c=ctm;
            this.c=new CustomerModel(ctm.customerId,ctm.customerName,ctm.mobileNumber,ctm.city);
            // console.log(this.c);
            this.btnstatus=true;
        }
    
        updateCustomer(ctm:any){
            this.api.update("/api/customer/",ctm).subscribe((e: any) => {
                // console.log(e);
                alert("Customer Updated Successfully");
                this.clearData();
                this.fetchCustomers();
            })
        }
    
        removeCustomer(cid:any){
            this.api.delete("/api/customer/"+cid).subscribe((e:any)=>{
                alert("Customer Deleted Successfully");
                this.fetchCustomers();
            })
        }
    
        clearData(){
            this.c=new CustomerModel(0,"", "", "");
            this.btnstatus=false;
        }
    
}