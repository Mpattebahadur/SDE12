import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserModule } from './user/user.module';
import{HttpClientModule, HTTP_INTERCEPTORS} from'@angular/common/http';
import { AuthInterInterceptor } from './core/auth/auth-inter.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    UserModule,
    HttpClientModule

    
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:AuthInterInterceptor,
      multi:true
    }
   
],
  bootstrap: [AppComponent]
})
export class AppModule { }
