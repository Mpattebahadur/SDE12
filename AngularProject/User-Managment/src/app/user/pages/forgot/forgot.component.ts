import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserserviceService } from 'src/app/shared/user/pages/userservice.service';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css']
})
export class ForgotComponent implements OnInit {

  forgot:FormGroup;
  email:any

  constructor(private forService:UserserviceService) { }
  
  submitforgot(){
    this.forService.getforgot(this.email).subscribe(
      (res:any)=>{
       
       console.log(res)
      },
      error=>{
        console.log(error)
      });
}
  
 ngOnInit(): void {
 
    this.forgot=new FormGroup({
      'email':new FormControl('',[Validators.required,Validators.email])
     })
  }

}
