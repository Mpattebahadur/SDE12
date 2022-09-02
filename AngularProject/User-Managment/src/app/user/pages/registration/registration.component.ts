import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserserviceService } from 'src/app/shared/user/pages/userservice.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registration:FormGroup

  resData:any
  regdata(){
    this.regService.doregistration(this.registration.value)
    .subscribe(res=>{
      if(res==='success'){
        console.log(res)
        alert(res)
        console.log("login sucessfully")
      }
      else{
        this.resData="Invalid creadials"
        console.log("Inavlid creadials")
        alert(res)
      }
     
    },
    err=>{
      
      console.log(err)
      this.resData="error"
    });
  }

  constructor(private regService:UserserviceService) { }

  

  ngOnInit(): void {
    this.getAllCountries(),
    this.registration=new FormGroup({
      'fname':new FormControl('',[Validators.required]),
      'lname':new FormControl('',[Validators.required]),
      'email':new FormControl('',[Validators.required,Validators.email]),
      'phno':new FormControl('',[Validators.required]),
      'dob':new FormControl('',[Validators.required]),
      'gender':new FormControl('',[Validators.required]),
      'countryId':new FormControl('',[Validators.required]),
      'stateId':new FormControl('',[Validators.required]),
      'cityId':new FormControl('',[Validators.required])
    })
    
  }

  countries:any
  states:any
  cities:any
  checkemail:any
  getAllCountries(){
    this.regService.getcountries().subscribe(
      (res:any)=>{
        this.countries=res
      },
      error=>{
        console.log(error)
      }
    )
  }

  getStatesBy(countryId){
  this.regService.getStates(countryId).subscribe(
    (res:any)=>{
      this.states=res
    },
    error=>{
      console.log(error)
    }
  )
  }
  getCitiesBy(StateId){
    this.regService.getCities(StateId).subscribe(
      (res:any)=>{
        this.cities=res
      },
      error=>{
        console.log(error)
      }
    )
  }

  getCheckEmail(email){
    this.regService.getCheckemail(email).subscribe(
      (data:any)=>{
        this.checkemail=data,
        console.log(data)
      },
      error=>{
        console.log(error)
      }
    )
  }
 

}

