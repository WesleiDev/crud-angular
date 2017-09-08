import { Router } from '@angular/router';
import { LoginService } from './../login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public usuario:any = {
    email:"weslei@hotmail.com",
    password:"1234"
  }
  

  public token:string;
  public tokenResponse: any;
  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
     this.getData()      
  }

  login() {
    this.loginService.login(this.usuario)
    .subscribe(
      (res: any)=>{
        this.tokenResponse = res;
        this.router.navigate(['cliente']);
        console.log("Resposta Login: ", res),
        error => console.log("Erro ao logar: ", error)
        
        
      }
    )
  }

  teste() {
    this.loginService.teste(this.tokenResponse.token)
    .subscribe(
      (res: any) => {
        console.log("Resposta depois do login: ", res);
        
      }
    )
  }

  sair() {
    this.loginService.sair()
    .subscribe(
      (res: any) => console.log("Resposta do sair: ", res)      
    )
  }

  getToken() {
    this.token = window.localStorage.getItem('token');
  }

  getData(){
    
    var m:any = '1504709134'.match(/(\d\d)(\d\d)(\d\d\d\d)/);
    var d = new Date(m[3], m[1] - 1, m[2]);
    console.log("Data: "+d);
    
  }

}
