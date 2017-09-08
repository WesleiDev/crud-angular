import { Cliente } from './cliente.i';
import { ClienteService } from './cliente.service';
import { ClienteRouterModule } from './cliente.routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http"


import { ClienteComponent } from './cliente.component';
import { EditarComponent } from './editar/editar.component';
import { DetalheComponent } from './detalhe/detalhe.component';
import { IncluirComponent } from './incluir/incluir.component';

@NgModule({
  imports: [
    CommonModule, 
    ClienteRouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  declarations: [
      ClienteComponent,
      EditarComponent,
      DetalheComponent,
      IncluirComponent, 
      
    ],
    exports :[
      ClienteComponent,
      EditarComponent
    ],
    providers:[
      ClienteService,
    ]
})
export class ClienteModule { }
