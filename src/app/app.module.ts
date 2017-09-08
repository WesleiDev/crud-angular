
import { UserService } from './user.service';
import { AppGuard } from './app.guard';
import { LoginModule } from './modulo/login/login.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { NgForm, FormsModule} from "@angular/forms"


import { AppComponent } from './app.component';
import { ClienteModule } from './modulo/cliente/cliente.module';
import { AppRoutingModule } from './app.routing.module';
import { NaoEncontradoComponent } from './nao-encontrado/nao-encontrado.component';
import { ClienteDetalheComponent } from './module/cliente-detalhe/cliente-detalhe.component';

@NgModule({
  declarations: [
    AppComponent,
    NaoEncontradoComponent,
    ClienteDetalheComponent,
  ],
  imports: [
    BrowserModule,
    ClienteModule,
    AppRoutingModule,
    LoginModule,
    // NgForm,    
    // FormsModule

  ],
  providers: [AppGuard, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
