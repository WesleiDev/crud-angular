import { Injectable } from '@angular/core';
import { Http } from "@angular/http";

@Injectable()
export class UserService {

  public token:string;
  constructor() { 
    this.pegarToken();
  }


  pegarToken() {
    this.token = window.localStorage.getItem('token');
    
  }

}
