import { Subscription } from 'rxjs/Rx';
import { ActivatedRoute } from '@angular/router';
import { Cliente } from './../cliente.i';
import { Router } from '@angular/router';
import { ClienteService } from './../cliente.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-incluir',
  templateUrl: './incluir.component.html',
  styleUrls: ['./incluir.component.css']
})
export class IncluirComponent implements OnInit {

  public formulario: FormGroup;
  public titulo: string = "Incluir Cliente";
  private cliente:Cliente;
  private inscricao: Subscription;

  constructor(private formBuilder: FormBuilder, 
              private clienteService: ClienteService, 
              private route: Router,
              private activatedRoute: ActivatedRoute ) { }

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      nomeclie: [null, [Validators.required]],
      fone: [null, Validators.required],
      endereco: [null, Validators.required] ,
      id: [null]
    })

    this.inscricao = this.activatedRoute.params.subscribe(
      (params: any) =>{
        if(params["id"]){
          let id = params["id"];
          this.clienteService.findCliente(id)
          .subscribe(
            (res) => {
              console.log("Editar: ", res);
              this.cliente = res.data;
              this.titulo = "Editar Cliente";
              this.popularForm(this.cliente);
              
            }
          )
        }
      }
    )

    console.log("ngOnInit");
  }

  salvarCliente() {
    console.log("Form");
    
    this.clienteService.postCliente(this.formulario.value)
    .then(
      (res: any)=> {
        console.log(res);
        this.route.navigate(['cliente']);
        
      }
    )
    
  }

  popularForm(cliente: Cliente) {
    this.formulario.patchValue({
      id: cliente.id,
      nomeclie: cliente.nomeclie,
      fone: cliente.fone,
      endereco: cliente.endereco
    })
  }



}
