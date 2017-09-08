import { Cliente } from './../cliente.i';
import { ClienteService } from './../cliente.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from "rxjs/Rx";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-detalhe',
  templateUrl: './detalhe.component.html',
  styleUrls: ['./detalhe.component.css']
})
export class DetalheComponent implements OnInit {


  private inscricao: Subscription;
  public cliente: Cliente;


  constructor(private route: ActivatedRoute, private clienteService: ClienteService) { }

  ngOnInit() {
    console.log("ngOnInit Detalhe");
    

    this.inscricao = this.route.params.subscribe(
      (params: any) =>{
        let id = params['id'];
        console.log("Id do cliente: ",id);  
        this.clienteService.findCliente(id)
        .subscribe(
          (response:any)=>{
            this.cliente = response.data;            
          }
        )      
      }
 
    )
  }

}
