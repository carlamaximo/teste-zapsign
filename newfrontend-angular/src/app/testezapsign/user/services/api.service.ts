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

  getAllUsers(): Observable<any> {
    return this.http.get(this.baseUrl + 'users/',
    { headers: this.httpHeaders })
  }

  getUser(id:any):Observable<any> {
    return this.http.get(this.baseUrl + 'users/' + id + '/detalhes/',
    { headers: this.httpHeaders })
  }

  updateUser(user:any):Observable<any> {
    let body = { email: user.email };
    return this.http.put(this.baseUrl + 'users/' + user.id_user + '/detalhes/', body,
    { headers: this.httpHeaders })
  }

  createUser(user:any):Observable<any> {
    return this.http.post(this.baseUrl + 'users/', user,
    { headers: this.httpHeaders })
  }

  deleteUser(id:any):Observable<any> {
    return this.http.delete(this.baseUrl + 'users/' + id + '/',
    { headers: this.httpHeaders })
  }

}
