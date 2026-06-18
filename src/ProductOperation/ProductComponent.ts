import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ProductModel } from "./ProductModel";

@Component({
    selector:'app-root',
    templateUrl:'Product.html',
    imports:[FormsModule]
})

export class ProductClass{
    
    productlist:any=[];
    index=-1;
    btnstatus=false;

    p=new ProductModel("","","","","","");

    AddProduct(obj:any){
        this.productlist.push(obj);
        this.ClearData();
    }

    ClearData(){
        this.p=new ProductModel("","","","","","");
        this.btnstatus=false;
        this.index=-1;
    }

    ViewProduct(obj:any,index:number){
        // console.log(obj);
        // console.log(index);
        this.index=index;
        // this.p=obj;
        this.p=new ProductModel(obj.ProductId,obj.ProductName,obj.Packing,obj.Rate,obj.Gst,obj.StockQuantity);
        this.btnstatus=true;
    }

    UpdateProduct(obj:any){
        this.productlist[this.index]=obj;
        this.ClearData();
    }

    DeleteProduct(index:any)
    {
        if(confirm("Are you sure to delete the product?"))
        {
          this.productlist.splice(index,1);
        }
    }
}