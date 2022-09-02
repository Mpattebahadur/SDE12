import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserserviceService } from 'src/app/shared/user/pages/userservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  sign:FormGroup


  constructor(private service:UserserviceService) { }

  msg:any


  dologin(){
    
    this.service.dologin(this.sign.value)
    .subscribe((Response:any)=>{
      if(Response==='SUCCESS'){
        alert('login successfull')
        console.log(Response)
      }
      else{
        
        alert('Invalid Credentials')
        console.log('Invalid Credentials')
      }},
     error=>{
      console.log(error);
      

});
  }

  ngOnInit(): void {
    this.sign=new FormGroup({
      'email':new FormControl('',[Validators.required]),
      'pwd':new FormControl('',[Validators.required,Validators.minLength(3)])
    });
    
  }

}
