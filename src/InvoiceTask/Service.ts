import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ApiUrl } from "./ApiUrl";

@Injectable()
export class Service{
    constructor(private http:HttpClient,private url:ApiUrl)
    {

    }

    fetch(endpoint:any):any{
        return this.http.get(this.url.apiUrl+endpoint);
    }

    add(endpoint:any,st:any):any{
        return this.http.post(this.url.apiUrl+endpoint,st);
    }

    view(endpoint:any):any{
        return this.http.get(this.url.apiUrl+endpoint);
    }
    update(endpoint:any,st:any):any{
        return this.http.put(this.url.apiUrl+endpoint,st);
    }

    delete(endpoint:any):any{
        return this.http.delete(this.url.apiUrl+endpoint);
    }
}