import { Cliente } from './cliente.i';
import { Injectable, OnInit } from '@angular/core';
import { Http, Response, Headers } from "@angular/http";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import "rxjs/Rx";

@Injectable()
export class ClienteService {

  private header = new Headers();
  private token: string;

  private clientes: Cliente[] = new Array();
  constructor(private http: Http) {
    this.header.append('Accept', 'application/json');
    this.header.append('Content-Type', 'application/json');
    console.log("Contrutor servico cliente");
    
   }

   ngOnInit() {
     //this.pegarToken();
     console.log("Token: "+this.token);
     
     
   }


  getClientes():any {
    this.pegarToken();
    
    return this.http.get('http://127.0.0.1:8000/api/clientes?token='+this.token)
    .map(
      (response: any )=>{
        this.clientes = response.data ;
        console.log("Resposta: ", this.clientes);
        
        return response.json();
      }
    )
  
  }

  findCliente(id: number):any{
  this.pegarToken();
    
    return this.http.get("http://127.0.0.1:8000/api/clientes/"+id+"?token="+this.token)
    .map(
        (response: any) =>{
          console.log("Clie:",response.json());          
          return response.json();
        }
        
      )
      
  }

  postCliente(cliente: Cliente) {
    this.pegarToken();
    return this.http.post("http://127.0.0.1:8000/api/post?token="+this.token, JSON.stringify(cliente) , {headers: this.header})
    .toPromise()
    .then(
      res => res.json()
    )

  }

  excluirCliente(cliente: Cliente){
    return this.http.post("http://127.0.0.1:8000/api/delete?token="+this.token, JSON.stringify(cliente), {headers: this.header} )
    .toPromise()
    .then(
      res => res.json()
    )
  }

  pegarToken() {
    this.token = window.localStorage.getItem('token');
    
  }

}
