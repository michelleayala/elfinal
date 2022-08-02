import { Component, Input, OnInit } from '@angular/core';
import { MensajesService } from 'src/app/servicios/mensajes.service';
import { PeticionesService } from 'src/app/servicios/peticiones.service';
//import * as $ from 'jquery';
declare var swal: any

declare var $:any

interface NavToggle{
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})

export class  UsuariosComponent implements OnInit {

  isNavCollapsed = false;
  screenWidth = 0;

  onTogglenav(data: NavToggle): void {
    this.screenWidth = data.screenWidth;
    this.isNavCollapsed = data.collapsed;
  }

  @Input() collapsed = false;

  getUsuariosClass(): string{
    let styleClass = '';
    if(this.collapsed && this.screenWidth > 768){
      styleClass = 'usuarios-trimmed';
    } 
    else if(this.collapsed && this.screenWidth <= 768 && this.screenWidth > 0){
      styleClass = 'usuarios-md-screen'
    }
    return styleClass;
  }
 
  constructor(private peticion: PeticionesService, private msg:MensajesService) { }

  ngOnInit(): void {
    this.CargarTodas()
  }
  
 
  datosUsuario:any[] = [];
  
  nombre:string = ""
  apellido:string = ""
  usuario:string = ""
  password: string = ""
  email:string = ""
  telefono:string = ""
  perfil:string = ""
  idseleccionado:string = ''

  CargarTodas(){
    var post = {
      host:this.peticion.urlLocal,
      path:'/registro/CargarTodas',
      payload:{
      }
    }

    this.peticion.post(post.host + post.path,post.payload).then((res:any)=>{
      console.log(res)
      this.datosUsuario = res.documentos
    })
  }

  Guardar(){

    var post = {
      host:this.peticion.urlLocal,
      path:'/registro/Guardar',
      payload:{
        nombre:this.nombre,
        apellido:this.apellido,
        usuario:this.usuario,
        password:this.password,
        email: this.email,
        telefono:this.telefono,
        perfil:this.perfil,
      }
    }
    console.log(post)

    this.peticion.post(post.host + post.path,post.payload).then((res:any)=>{
      console.log(res)
      if(res.state == true){
        this.msg.AgregarMensajes('success',res.mensaje,5000)
        swal("Good job!", "Usuario Creado Correctamente!", "success");
        this.CargarTodas()
        this.Limpiar()
        $('#modalusuarios').modal('hide')
        
      }else{
        this.msg.AgregarMensajes('danger',res.mensaje,5000)
      }
    })
  }
  
  Eliminar(myid:string){
    
    var post = {
      host:this.peticion.urlLocal,
      path:'/registro/Eliminar',
      payload:{
       id:myid
      }
    }
    console.log(post)

    this.peticion.post(post.host + post.path,post.payload).then((res:any)=>{
      console.log(res)
      if(res.state == true){
        this.msg.AgregarMensajes('success',res.mensaje,5000)
        swal("Cuidado!", "Usuario Eliminado Correctamente!", "warning");
        this.CargarTodas()
      }else{
        this.msg.AgregarMensajes('danger',res.mensaje,5000)
      }
    })
  }

  Editar(myid:string){
    
    this.idseleccionado = myid
    var post = {
      host:this.peticion.urlLocal,
      path:'/registro/CargarId',
      payload:{
       id:myid
        }
    }
    console.log(post)

    this.peticion.post(post.host + post.path,post.payload).then((res:any)=>{
      console.log(res)
      if(res.state == true){
        this.nombre = res.documentos[0].nombre
        this.apellido = res.documentos[0].apellido
        this.usuario = res.documentos[0].usuario
        this.password = res.documentos[0].password
        this.email = res.documentos[0].email
        this.telefono = res.documentos[0].telefono
        this.perfil = res.documentos[0].perfil
        $('#modalusuarios').modal('show')
      }
    })
  }

  Nuevo(){
    $('#modalusuarios').modal('show')
    this.Limpiar()
  }

  Limpiar(){
    
    this.nombre = ""
    this.apellido = ""
    this.usuario = ""
    this.password = ""
    this.email = ""
    this.telefono = ""
    this.perfil = ""

  }

  Actualizar(){
    
    var post = {
      host:this.peticion.urlLocal,
      path:'/registro/Actualizar',
      payload:{
        id:this.idseleccionado,
        nombre:this.nombre,
        apellido:this.apellido,
        usuario:this.usuario,
        password:this.password,
        email: this.email,
        telefono:this.telefono,
        perfil:this.perfil,
      }
    }
    console.log(post)

    this.peticion.post(post.host + post.path,post.payload).then((res:any)=>{
      console.log(res)
      if(res.state == true){
        this.msg.AgregarMensajes('success',res.mensaje,5000)
        swal("Good job!", "Usuario Actualizado Correctamente!", "success");
        this.CargarTodas()
        this.Limpiar()
        $('#modalusuarios').modal('hide')
      }else{
        this.msg.AgregarMensajes('danger',res.mensaje,5000)
      }
    })
  }
}
