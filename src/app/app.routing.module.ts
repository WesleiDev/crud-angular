import { AppGuard } from './app.guard';
import { LoginComponent } from './modulo/login/login.component';
import { NaoEncontradoComponent } from './nao-encontrado/nao-encontrado.component';
import { ModuleWithProviders, NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { ClienteComponent } from './modulo/cliente/cliente.component';
import { EditarComponent } from './modulo/cliente/editar/editar.component';

const appRoutes: Routes =[
    { path:'login', component: LoginComponent, canActivate: [AppGuard] },
    { path: '', redirectTo:'/cliente', pathMatch: 'full'},
    {path: '**', component: NaoEncontradoComponent}
]

@NgModule({
    imports:[RouterModule.forRoot(appRoutes, { useHash: false})],
    exports: [RouterModule]
})
export class AppRoutingModule{}