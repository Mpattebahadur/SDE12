import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  
  Base_url=environment.apiurl
  constructor(private http:HttpClient) { }

  
  getforgot(email:any){
    return this.http.get(`${this.Base_url}/forgotPwd/${email}`,{responseType:'text'})
   }

  getCheckemail(data:any){
   return this.http.get(`http://localhost:9090/emailcheck/${data}`,{responseType:'text'})
  }

  getcountries(){
    return this.http.get(`${this.Base_url}/countries`)
   }

  getStates(countryId:any){
   return this.http.get(`${this.Base_url}/states/${countryId}`)
  }

  getCities(StateId:any){
   return this.http.get(`${this.Base_url}/cities/${StateId}`)
  }

  dologin(data:any){
   return this.http.post("http://localhost:9090/login",data,{responseType:'text'})
  }


  doregistration(data:any){
   return this.http.post("http://localhost:9090/saveUser",data,{responseType:'text'})
  }
  dounlock(data:any){
   return this.http.post("http://localhost:9090/unlock",data,{responseType:'text'})
  }
}
