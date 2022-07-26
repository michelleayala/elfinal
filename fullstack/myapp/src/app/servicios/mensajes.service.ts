import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MensajesService {

  constructor() {}

    public msgDatos:any[] =[
      //{tipo:'success',mensaje:'hola mundo'},
      //{tipo:'success',mensaje:'hola mundo'},
      //{tipo:'success',mensaje:'hola mundo'},
      //{tipo:'danger',mensaje:'esto es un error'},
      //{tipo:'success',mensaje:'hola mundo'}
    ]

    AgregarMensajes(tipox:string,mensajex:string,tiempo:number){
      
      this.msgDatos.push({tipo:tipox,mensajes:mensajex})
      this.eliminarmensaje(tiempo)
    }

    eliminarmensaje(tiempo:number){

      setTimeout(() => {
        this.msgDatos.splice(0,1)
      },tiempo);
    }
}
