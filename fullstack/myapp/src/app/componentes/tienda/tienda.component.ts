import { Component, OnInit } from '@angular/core';
import { PeticionesService } from 'src/app/servicios/peticiones.service';
import Swiper from 'swiper';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})
export class TiendaComponent implements OnInit {

  constructor(private peticion: PeticionesService) { }

  ngOnInit(): void {
    this.CargarTodoslosProductos()
  }
  misproductos:any[] = []

  CargarTodoslosProductos(){
    var post = {
      host:this.peticion.urlLocal,
      path:'/productos/CargarTodas',
      payload:{
      }
    }

    this.peticion.post(post.host + post.path,post.payload).then((res:any)=>{
      console.log(res)
      this.misproductos = res.documentos
    })
  }
}

