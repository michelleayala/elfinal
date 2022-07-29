import { Component, Input, OnInit } from '@angular/core';
import { MensajesService } from 'src/app/servicios/mensajes.service';
import { PeticionesService } from 'src/app/servicios/peticiones.service';

interface NavToggle{
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {
  isNavCollapsed = false;
  screenWidth = 0;

  onTogglenav(data: NavToggle): void {
    this.screenWidth = data.screenWidth;
    this.isNavCollapsed = data.collapsed;
  }

  @Input() collapsed = false;
  
  getCategoriasClass(): string{
    let styleClass = '';
    if(this.collapsed && this.screenWidth > 768){
      styleClass = 'Categorias-trimmed';
    } 
    else if(this.collapsed && this.screenWidth <= 768 && this.screenWidth > 0){
      styleClass = 'Categorias-md-screen'
    }
    return styleClass;
  }
  
  constructor(private peticion: PeticionesService, private msg:MensajesService) { }

  ngOnInit(): void {
    this.CargarTodas()
  }

  misdatos:any[] =[];
  codigo:string = ""
  nombre:string = ""
  idseleccionado:string = ''

  CargarTodas(){
    var post = {
      host:this.peticion.urlLocal,
      path:'/categorias/CargarTodas',
      payload:{
      }
    }

    this.peticion.post(post.host + post.path,post.payload).then((res:any)=>{
      console.log(res)
      this.misdatos = res.documentos
    })
  }

  Guardar(){
    var post = {
      host:this.peticion.urlLocal,
      path:'/categorias/Guardar',
      payload:{
        codigo:this.codigo,
        nombre:this.nombre,
        }
    }
    console.log(post)

    this.peticion.post(post.host + post.path,post.payload).then((res:any)=>{
      console.log(res)
      if(res.state == true){
        this.msg.AgregarMensajes('success',res.mensaje,5000)
        this.CargarTodas()
        this.Limpiar()
      }else{
        this.msg.AgregarMensajes('danger',res.mensaje,5000)
      }
      
    })
  }

 

  Eliminar(myid:string){
    var post = {
      host:this.peticion.urlLocal,
      path:'/categorias/Eliminar',
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
      path:'/categorias/CargarId',
      payload:{
       id:myid
        }
    }
    console.log(post)

    this.peticion.post(post.host + post.path,post.payload).then((res:any)=>{
      console.log(res)
      if(res.state == true){
        this.codigo = res.documentos[0].codigo
        this.nombre = res.documentos[0].nombre
      }
      
    })

  }

  Nuevo(){
    this.Limpiar()
  }

  Limpiar(){
    
    this.codigo = ""
    this.nombre = ""
  }

  Actualizar(){
    var post = {
      host:this.peticion.urlLocal,
      path:'/categorias/Actualizar',
      payload:{
        id:this.idseleccionado,
        codigo:this.codigo,
        nombre:this.nombre,
        }
    }
    console.log(post)

    this.peticion.post(post.host + post.path,post.payload).then((res:any)=>{
      console.log(res)
      if(res.state == true){
        this.msg.AgregarMensajes('success',res.mensaje,5000)
        this.CargarTodas()
        this.Limpiar()
      }else{
        this.msg.AgregarMensajes('danger',res.mensaje,5000)
      }
      
    })
  }

  item:any= {
    path: '/subirImagen',
    destino:'http://localhost:3000'
  }
}

