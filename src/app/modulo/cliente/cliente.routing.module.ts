import { AppGuard } from './../../app.guard';
import { CanActivate } from '@angular/router';
import { IncluirComponent } from './incluir/incluir.component';
import { DetalheComponent } from './detalhe/detalhe.component';
import { EditarComponent } from './editar/editar.component';
import { ClienteComponent } from './cliente.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


const clienteRouting = [
    { path:'cliente/incluir', component: IncluirComponent, canActivate: [AppGuard]},
    { path: 'cliente/editar/:id', component : IncluirComponent },
    { path:'cliente', component: ClienteComponent, children:[
        {path: ':id', component: DetalheComponent}      
    ], canActivate: [AppGuard]}   
];

@NgModule({
    imports: [RouterModule.forChild(clienteRouting)],
    exports: [RouterModule]
})
export class ClienteRouterModule{

}