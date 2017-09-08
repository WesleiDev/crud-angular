import { Cliente } from './cliente.i';
import { ClienteService } from './cliente.service';
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  public clientes: Cliente[];
  
  constructor(private clienteService: ClienteService, private router: Router) { }

  ngOnInit() {
    // console.log("ngOnInit Cliente");
    // console.log("Token cliente: ", localStorage.getItem("token"));
    
    // this.clienteService.getClientes()
    //   .subscribe(
    //     (res: any) =>{ 
    //       this.clientes =  res.data
    //       console.log("Clientes: ", this.clientes);
          
    //     }
    //     ,
    //     (error: Response) => this.clienteService.getClientes()       
        
    //   )
    
  }

  ngDoCheck() {
    // console.log("Do Cheke CLiente");
    // this.clienteService.getClientes()
    //   .subscribe(
    //     (res: any) =>{ 
    //       this.clientes =  res.data
    //       console.log("Clientes: ", this.clientes);
          
    //     }
    //     ,
    //     (error: Response) => console.log("Erro ao consultar clientes: ",error)       
        
    //   )
    
  }

  ngAfterContentInit(){
   console.log("After Content");
    
  }

  viewCliente(clienteid: number) {
   
    this.router.navigate(['cliente/', clienteid]);

  }

  excluirCliente(cliente: Cliente){
    if(cliente.id){
      this.clienteService.excluirCliente(cliente)
      .then(
        res => {
          console.log("Cliente excluído com sucesso:",res.data);
          alert("Cliente Excluído com sucesso!");
          this.clienteService.getClientes()
          .subscribe(
            res => this.clientes = res.data
          )
          
        }
      )
    }
  }

  editarCliente(id: number) {
    this.router.navigate(["cliente/editar", id]);
  }

  consultarTodos() {
    this.clienteService.getClientes()
      .subscribe(
        (res: any) =>{ 
          this.clientes =  res.data
          console.log("Clientes: ", this.clientes);
          
        }
        ,
        (error: Response) => console.log("Erro ao consultar clientes: ",error)       
        
      )

  }

}
