import { LoginService } from './../login.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { FormsModule } from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
     FormsModule
  ],
  declarations: [
    LoginComponent
  ],
  providers:[
    LoginService,
  ],
  exports: [
    LoginComponent
  ]
})
export class LoginModule { }
