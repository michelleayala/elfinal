import { Component, Input, OnInit } from '@angular/core';
import { PeticionesService } from 'src/app/servicios/peticiones.service';
//import * as $ from 'jquery';

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
  
  constructor(private peticion: PeticionesService) { }

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
        destacado:this.destacado
        }
    }
    console.log(post)

    this.peticion.post(post.host + post.path,post.payload).then((res:any)=>{
      console.log(res)
    })
  }

  Nuevo(){
    $('#modalproductos').modal('show')
    this.codigo = ""
    this.nombre = ""
    this.descripcion = ""
    this.precio = ""
    this.cantidad = 1
    this.vrdescuento
    this.nuevo= ""
    this.destacado= ""
  }
}
