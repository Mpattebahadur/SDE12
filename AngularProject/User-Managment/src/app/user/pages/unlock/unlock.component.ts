import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserserviceService } from 'src/app/shared/user/pages/userservice.service';

@Component({
  selector: 'app-unlock',
  templateUrl: './unlock.component.html',
  styleUrls: ['./unlock.component.css']
})
export class UnlockComponent implements OnInit {

  unlock:FormGroup

   userdata:any

  unlockData(){
    this.service.dounlock(this.unlock.value)
    .subscribe(res=>{
      if(res==='success'){
        console.log(res)
        alert(res)
        console.log("login sucessfully")
      }
      else{
    
        this.userdata="Invalid creadials"
        console.log("Inavlid creadials")
        alert(res)
      }
     
    },
    err=>{
      
      console.log(err)
      this.userdata="error"
    });
     
  }
    

  
    constructor(private service:UserserviceService) { }

  ngOnInit(): void {
    this.unlock=new FormGroup({
      'email':new FormControl('',[Validators.required]),
      'tempPwd':new FormControl('',[Validators.required]),
      'newPwd':new FormControl('',[Validators.required]),
      'confirmPwd':new FormControl('',[Validators.required])
    })
  }

}
