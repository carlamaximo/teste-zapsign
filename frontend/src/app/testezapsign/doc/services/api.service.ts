import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  baseUrl = 'http://localhost:8000/';
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  getAllDocs(): Observable<any> {
    return this.http.get(this.baseUrl + 'docs/',
    { headers: this.httpHeaders })
  }

  deleteDoc(id:any):Observable<any> {
    return this.http.delete(this.baseUrl + 'docs/' + id + '/',
    { headers: this.httpHeaders })
  }

  createDoc(doc:any):Observable<any> {
    return this.http.post(this.baseUrl + 'docs/', doc,
    { headers: this.httpHeaders })
  }

}


