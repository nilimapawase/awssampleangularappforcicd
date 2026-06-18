import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { Service } from "./Service";
import { ApiUrl } from "./ApiUrl";
import { ProductModel } from "./ProductModel";

@Component({
    selector:'app-root',
    templateUrl:"Product.html",
    providers: [Service, ApiUrl],
    imports: [FormsModule]
})

export class ProductClass{

     products: any = [];
        p = new ProductModel(0,"", "", "", "");
        btnstatus:any=false;
    
        // constructor(private http:HttpClient)
        // {
        //     this.fetchProducts();
        // }
    
        // fetchProducts()
        // {
        //     this.http.get("https://localhost:7210/api/product").subscribe(e=>{
        //         console.log(e);
        //         this.products=e;
        //     })
        // }
    
        constructor(private api: Service) {
            this.fetchProducts();
        }
    
        fetchProducts() {
            this.api.fetch("/api/product").subscribe((e: any) => {
                // console.log(e);
                this.products = e;
            })
        }
    
        addProduct(pr: any){
            this.api.add("/api/product/",pr).subscribe((e: any) => {
                // console.log(e);
                alert("Product Added Successfully");
                this.clearData();
                this.fetchProducts();
            })
        }
    
        viewProduct(pr:any){
            // console.log(pr);
            // this.p=pr;
            this.p=new ProductModel(pr.productId,pr.productName,pr.rate,pr.gst,pr.stockQuantity);
            // console.log(this.p);
            this.btnstatus=true;
        }
    
        updateProduct(pr:any){
            this.api.update("/api/product/",pr).subscribe((e: any) => {
                // console.log(e);
                alert("Product Updated Successfully");
                this.clearData();
                this.fetchProducts();
            })
        }
    
        removeProduct(pid:any){
            this.api.delete("/api/product/"+pid).subscribe((e:any)=>{
                alert("Product Deleted Successfully");
                this.fetchProducts();
            })
        }
    
        clearData(){
            this.p=new ProductModel(0,"", "", "", "");
            this.btnstatus=false;
        }
    
}