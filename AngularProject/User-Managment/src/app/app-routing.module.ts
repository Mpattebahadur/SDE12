import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashbordComponent } from './user/pages/dashbord/dashbord.component';
import { ForgotComponent } from './user/pages/forgot/forgot.component';
import { LoginComponent } from './user/pages/login/login.component';
import { RegistrationComponent } from './user/pages/registration/registration.component';
import { UnlockComponent } from './user/pages/unlock/unlock.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'',component:DashbordComponent},
  {path:'registration',component:RegistrationComponent},
  {path:'unlockAcc',component:UnlockComponent},
  {path:'forgot',component:ForgotComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
