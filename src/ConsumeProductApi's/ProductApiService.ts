import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ApiUrl } from "./ApiUrl";

@Injectable()
export class ProductService{
    constructor(private http:HttpClient,private url:ApiUrl)
    {

    }

    fetchProducts(endpoint:any):any{
        return this.http.get(this.url.apiUrl+endpoint);
    }

    addProduct(endpoint:any,st:any):any{
        return this.http.post(this.url.apiUrl+endpoint,st);
    }

    viewProduct(endpoint:any):any{
        return this.http.get(this.url.apiUrl+endpoint);
    }
    updateProduct(endpoint:any,st:any):any{
        return this.http.put(this.url.apiUrl+endpoint,st);
    }

    deleteProduct(endpoint:any):any{
        return this.http.delete(this.url.apiUrl+endpoint);
    }
}