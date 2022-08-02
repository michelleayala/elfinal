import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {


  constructor() { 
   
  }


  ngOnInit(): void {
    
  }

  misdatos:any[] = [];
  imagenproducto:String = ""
  nombre:String = ""
  precio:Number = 1
  vrdescuento:String = ""
  cantidad:Number = 1
  subtotal:Number = 1
  total:Number = 1
  nombrecliente:String = ""
  direccion:String = ""
  telefono:Number = 1
  
}


