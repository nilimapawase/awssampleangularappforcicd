import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ApiUrl } from "./ApiUrl";

@Injectable()
export class StudentService{
    constructor(private http:HttpClient,private url:ApiUrl)
    {

    }

    fetchStudents(endpoint:any):any{
        return this.http.get(this.url.apiUrl+endpoint);
    }

    addStudent(endpoint:any,st:any):any{
        return this.http.post(this.url.apiUrl+endpoint,st);
    }

    viewStudent(endpoint:any):any{
        return this.http.get(this.url.apiUrl+endpoint);
    }
    updateStudent(endpoint:any,st:any):any{
        return this.http.put(this.url.apiUrl+endpoint,st);
    }

    deleteStudent(endpoint:any):any{
        return this.http.delete(this.url.apiUrl+endpoint);
    }
}