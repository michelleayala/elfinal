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
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})

export class ProductosComponent implements OnInit {

  isNavCollapsed = false;
  screenWidth = 0;

  onTogglenav(data: NavToggle): void {
    this.screenWidth = data.screenWidth;
    this.isNavCollapsed = data.collapsed;
  }

  @Input() collapsed = false;
  
  getProductosClass(): string{
    let styleClass = '';
    if(this.collapsed && this.screenWidth > 768){
      styleClass = 'Productos-trimmed';
    } 
    else if(this.collapsed && this.screenWidth <= 768 && this.screenWidth > 0){
      styleClass = 'Productos-md-screen'
    }
    return styleClass;
  }
  
  constructor(private peticion: PeticionesService, private msg:MensajesService) { }

  ngOnInit(): void {
    this.CargarTodas()
  }

  misdatos:any[] = [];
  
  codigo:string = ""
  nombre:string = ""
  precio:string = ""
  cantidad: number = 1
  vrdescuento:string = ""
  nuevo:string = ""
  destacado:string = ""
  descripcion:string = ""
  idseleccionado:string = ''
  nombreimagen:string = ""
  imagenproducto:string = "default.png"

  CargarTodas(){
    var post = {
      host:this.peticion.urlLocal,
      path:'/productos/CargarTodas',
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
      path:'/productos/Guardar',
      payload:{
        codigo:this.codigo,
        nombre:this.nombre,
        descripcion:this.descripcion,
        precio:this.precio,
        cantidad: this.cantidad,
        vrdescuento:this.vrdescuento,
        nuevo:this.nuevo,
        destacado:this.destacado,
        imagenproducto:this.imagenproducto
        }
    }
    console.log(post)

    this.peticion.post(post.host + post.path,post.payload).then((res:any)=>{
      console.log(res)
      if(res.state == true){
        this.msg.AgregarMensajes('success',res.mensaje,5000)
        swal("Good job!", "Producto creado Correctamente!", "success");
        this.CargarTodas()
        this.Limpiar()
        $('#modalproductos').modal('hide')
      }else{
        this.msg.AgregarMensajes('danger',res.mensaje,5000)
      }
      
    })
  }

  Eliminar(myid:string){

    var post = {
      host:this.peticion.urlLocal,
      path:'/productos/Eliminar',
      payload:{
       id:myid
        }
    }
    console.log(post)

    this.peticion.post(post.host + post.path,post.payload).then((res:any)=>{
      console.log(res)
      if(res.state == true){
        this.msg.AgregarMensajes('success',res.mensaje,5000)
        swal("Cuidado!", "Producto eliminado Correctamente!", "warning");
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
      path:'/productos/CargarId',
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
        this.precio = res.documentos[0].precio
        this.cantidad = res.documentos[0].cantidad
        this.vrdescuento = res.documentos[0].vrdescuento
        this.nuevo = res.documentos[0].nuevo
        this.destacado = res.documentos[0].destacado
        this.descripcion = res.documentos[0].descripcion
        this.imagenproducto = res.documentos[0].imagenproducto
        $('#modalproductos').modal('show')
      }
      
    })

  }

  Nuevo(){
    $('#modalproductos').modal('show')
    this.Limpiar()
  }

  Limpiar(){
    
    this.codigo = ""
    this.nombre = ""
    this.descripcion = ""
    this.precio = ""
    this.cantidad = 1
    this.vrdescuento
    this.nuevo= ""
    this.destacado= ""
    this.nombreimagen= ""
  }

  Actualizar(){
    
    var post = {
      host:this.peticion.urlLocal,
      path:'/productos/Actualizar',
      payload:{
        id:this.idseleccionado,
        codigo:this.codigo,
        nombre:this.nombre,
        descripcion:this.descripcion,
        precio:this.precio,
        cantidad: this.cantidad,
        vrdescuento:this.vrdescuento,
        nuevo:this.nuevo,
        destacado:this.destacado,
        imagenproducto:this.imagenproducto
        }
    }
    console.log(post)

    this.peticion.post(post.host + post.path,post.payload).then((res:any)=>{
      console.log(res)
      if(res.state == true){
        this.msg.AgregarMensajes('success',res.mensaje,5000)
        swal("Good job!", "Producto Actualizado Correctamente!", "info");
        this.CargarTodas()
        this.Limpiar()
        $('#modalproductos').modal('hide')
      }else{
        this.msg.AgregarMensajes('danger',res.mensaje,5000)
      }
      
    })
  }

  item:any= {
    path: '/subirImagen',
    destino:'http://localhost:3000'
  }

  cambiarimagen(event:any){
  console.log(event)
  this.nombreimagen=event.nombre
  }
}

