import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { ApiUrl } from "./ApiUrl";
import { FormsModule } from "@angular/forms";
import { Product } from "./ProductModel";
import { ProductService } from "./ProductApiService";

@Component({
    selector: 'app-root',
    templateUrl: "Product.html",
    providers: [ProductService, ApiUrl],
    imports: [FormsModule]
})

export class ProductClass {

    products: any = [];
    p = new Product(0,"", "", "", "");
    btnstatus:any=false;

    // constructor(private http:HttpClient)
    // {
    //     this.fetchProducts();
    // }

    // fetchProducts()
    // {
    //     this.http.get("https://dummyapis.ciitstudent.com/api/product").subscribe(e=>{
    //         console.log(e);
    //         this.products=e;
    //     })
    // }

    constructor(private api: ProductService) {
        this.fetchProducts();
    }

    fetchProducts() {
        this.api.fetchProducts("/api/product").subscribe((e: any) => {
            // console.log(e);
            this.products = e;
        })
    }

    addProduct(pr: any){
        this.api.addProduct("/api/product/",pr).subscribe((e: any) => {
            // console.log(e);
            alert("Product Added Successfully");
            this.clearData();
            this.fetchProducts();
        })
    }

    viewProduct(pr:any){
        // console.log(pr);
        // this.p=pr;
        this.p=new Product(pr.productId,pr.productName,pr.rate,pr.gst,pr.stockQuantity);
        // console.log(this.p);
        this.btnstatus=true;
    }

    updateProduct(pr:any){
        this.api.updateProduct("/api/product/",pr).subscribe((e: any) => {
            // console.log(e);
            alert("Product Updated Successfully");
            this.clearData();
            this.fetchProducts();
        })
    }

    removeProduct(pid:any){
        this.api.deleteProduct("/api/product/"+pid).subscribe((e:any)=>{
            alert("Product Deleted Successfully");
            this.fetchProducts();
        })
    }

    clearData(){
        this.p=new Product(0,"", "", "", "");
        this.btnstatus=false;
    }
}





