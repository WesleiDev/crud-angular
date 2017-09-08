import { Injectable, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Rx';
import { CanActivate, CanLoad,ActivatedRouteSnapshot, RouterStateSnapshot, Route} from "@angular/router";
import { Http, Response} from "@angular/http";
import { Router } from "@angular/router";
import 'rxjs/add/operator/map';

@Injectable()
export class AppGuard implements CanActivate, CanLoad{
    private tokenRefresh: string;
    
    canLoad(route: Route): boolean | Observable<boolean> | Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    private token: string;

    constructor(private http: Http, private router: Router){
        console.log("Contrutor Auth ROTA");        

    }

    ngOnInit() {
        console.log("Init");
        
    }
    


    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        console.log("Entrou na ROTA");
        var result:boolean = false;
        
        console.log("Rota",state.url);
        if(state.url == "/login"){
            console.log("Rota de login");
            
        }

        this.token = window.localStorage.getItem('token');
        console.log("Token salvo até o momento: ", this.token);
        if(( this.token != null)) {
            this.refreshToken()
            .subscribe(
                (token: any) => {
                    console.log("Resposta refresh", token);
                    this.tokenRefresh = token.json().data;
                    var refreshToken:any = this.tokenRefresh;
                    
                    if((refreshToken == "Token Expired") ||(refreshToken == "Token Invalid")){
                        if (state.url != "\login"){
                            this.router.navigate(['login'])
            
                        }
                        

                    }else{
                         localStorage.setItem('token', refreshToken);
                        // this.router.navigate(['cliente']);    
                  
                    }
                },
                    (errro: any) => {console.log("Erro ao refresh: ", errro)}
                
                
            )
        }else{
             if(state.url != "/login"){
                console.log("Rota de login -> Redireciona para login");
                this.router.navigate(['login'])
            
            }
        }

        console.log("Local Storage atualizado: ", localStorage.getItem('token'));
        
        
        // if(this.token != ""){
        //     console.log("Inicio Refresh Token");
            
        //     this.refreshToken()
        //     .subscribe(
        //         (res: any)=> {
        //             console.log("Resposta TokenRefresh: ", res.data);
                    
        //         }
        //     )
        // }else{
        //     if(state.url !="/login"){
        //         this.router.navigate(['login'])
        //     }else{

        //     }
        // }
          
        return true;       
        
    }

    refreshToken() {

        return this.http.get('http://127.0.0.1:8000/api/auth/refresh?token='+this.token)
        .map(
            (tokenRefresh: any) => {
                return tokenRefresh
                        
            },
            error => console.log("Erro: ", error)
            
        )
        
      
    }



}