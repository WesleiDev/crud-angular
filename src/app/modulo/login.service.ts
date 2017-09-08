import { Injectable } from '@angular/core';
import { Http, Response, Headers } from "@angular/http";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
//import "rxjs/Rx";

@Injectable()
export class LoginService {
  private header = new Headers();

  constructor(private http: Http) { 
    this.header.append('Accept', 'application/json');
    this.header.append('Content-Type', 'application/json');
  }

  login(dados: any) {
    console.log("Dados enviado: ", dados);
    
    return this.http.post("http://127.0.0.1:8000/api/login", JSON.stringify(dados) , {headers: this.header})
    .map(
      (response: Response) => {
        const token = response.json().token;
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace('-', '+').replace('_', '/');

        return {token: token, decode:JSON.parse(window.atob(base64))};
      }
      
    ).do(
      tokenData =>{
        localStorage.setItem('token', tokenData.token)
      }
    )

    
  }

  teste(token: string) {
    return this.http.get("http://127.0.0.1:8000/api/clientes?token=+"+token)
    .map(
      (res:any) =>{
        return res.json();
        
      }
    )

  }

  sair() {
    return this.http.get("http://127.0.0.1:8000/sair")
    .map(
      (res: any) =>{
        return res.json();
      }
    )
  }

}
