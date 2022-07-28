import { Component, Input, OnInit } from '@angular/core';
import { MensajesService } from 'src/app/servicios/mensajes.service';
import { PeticionesService } from 'src/app/servicios/peticiones.service';
//import * as $ from 'jquery';

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
 
  constructor() { }

  ngOnInit(): void {
    
  }
  
  /*
  datosUsuario:any[] = [];
  
  nombre:string = ""
  apellido:string = ""
  usuario:string = ""
  contraseña: string = ""
  email:string = ""
  telefono:number = 1
  administrador:tring = ""
  idseleccionado:string = ''

  CargarTodas(){
    var post = {
      host:this.peticion.urlLocal,
      path:'/usuarios/CargarTodas',
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
      path:'/usuarios/Guardar',
      payload:{
        nombre:this.nombre,
        apellido:this.apellido,
        usuario:this.usuario,
        contraseña:this.contraseña,
        email: this.email,
        telefono:this.telefono,
        administrador:this.administrador,
      }
    }
    console.log(post)

    this.peticion.post(post.host + post.path,post.payload).then((res:any)=>{
      console.log(res)
      if(res.state == true){
        this.msg.AgregarMensajes('success',res.mensaje,5000)
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
      path:'/usuarios/Eliminar',
      payload:{
       id:myid
      }
    }
    console.log(post)

    this.peticion.post(post.host + post.path,post.payload).then((res:any)=>{
      console.log(res)
      if(res.state == true){
        this.msg.AgregarMensajes('success',res.mensaje,5000)
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
      path:'/usuarios/CargarId',
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
        this.contraseña = res.documentos[0].contraseña
        this.email = res.documentos[0].email
        this.telefono = res.documentos[0].telefono
        this.administrador = res.documentos[0].administrador
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
    this.contraseña = ""
    this.email = ""
    this.telefono = 1
    this.administrador = ""

  }

  Actualizar(){
    var post = {
      host:this.peticion.urlLocal,
      path:'/usuarios/Actualizar',
      payload:{
        id:this.idseleccionado,
        nombre:this.nombre,
        apellido:this.apellido,
        usuario:this.usuario,
        contraseña:this.contraseña,
        email: this.email,
        telefono:this.telefono,
        administrador:this.administrador,
      }
    }
    console.log(post)

    this.peticion.post(post.host + post.path,post.payload).then((res:any)=>{
      console.log(res)
      if(res.state == true){
        this.msg.AgregarMensajes('success',res.mensaje,5000)
        this.CargarTodas()
        this.Limpiar()
        $('#modalusuarios').modal('hide')
      }else{
        this.msg.AgregarMensajes('danger',res.mensaje,5000)
      }
    })
  }
  */
}
