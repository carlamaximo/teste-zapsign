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

  getAllCompanies(): Observable<any> {
    return this.http.get(this.baseUrl + 'companies/',
    { headers: this.httpHeaders })
  }

  getCompany(id:any):Observable<any> {
    return this.http.get(this.baseUrl + 'companies/' + id,
    { headers: this.httpHeaders })
  }

  // updateCompany(Company:any):Observable<any> {
  //   let body = { email: Company.email };
  //   return this.http.put(this.baseUrl + 'Companys/' + Company.id_Company, body,
  //   { headers: this.httpHeaders })
  // }

  createCompany(company:any):Observable<any> {
    return this.http.post(this.baseUrl + 'companies/', company,
    { headers: this.httpHeaders })
  }

  deleteCompany(id:any):Observable<any> {
    return this.http.delete(this.baseUrl + 'companies/' + id + '/',
    { headers: this.httpHeaders })
  }

  getCreatedUsers(): Observable<any> {
    return this.http.get(this.baseUrl + 'users/',
    { headers: this.httpHeaders })
  }

}
