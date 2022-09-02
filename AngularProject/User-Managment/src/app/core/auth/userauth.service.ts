import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserauthService {

  Base_Url=environment.apiurl
  constructor(private http:HttpClient) { }

  token(user:any){
    this.http.get(`${this.Base_Url}/athorization/generate`,user)
  }

  setToken(token){
    localStorage.setItem(`token`,token)
  }
  getToken(){
   return localStorage.getItem(`token`)
  }
}
