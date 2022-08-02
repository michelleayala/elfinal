import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { post } from 'jquery';
import { MensajesService } from 'src/app/servicios/mensajes.service';
import { PeticionesService } from 'src/app/servicios/peticiones.service';
declare var swal: any

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private peticion:PeticionesService, private msg:MensajesService, private router:Router) { }

  usuario:string = ""
  password:string = ""
  datos:any[] = []
  respuestalogin:any

  ngOnInit(): void {

  }

  Iniciar(){

    var post = {
      host:this.peticion.urlLocal,
      path:'/registro/Iniciar',
        payload:{
          usuario:this.usuario,
          password:this.password,
        }
    }
    
    this.peticion.post(post.host + post.path,post.payload).then((res:any)=>{
      console.log(res)
      this.respuestalogin = res
      if(res.state == true){
        this.msg.AgregarMensajes('success',res.mensaje,5000)
        swal("Good job!", "Has Iniciado Sesión Correctamente!", "success");
        this.router.navigate(['/panel'])
      }
      else{
        this.msg.AgregarMensajes('danger',res.mensaje,5000)
      }
      
    })

  }
}