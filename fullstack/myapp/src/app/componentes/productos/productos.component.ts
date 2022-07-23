import { Component, Input, OnInit } from '@angular/core';

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
  
  constructor( ) { }

  ngOnInit(): void {
  }
  misdatos:any[] =[];
  
  /*CargarTodas(){
    var post = {
      host:this.peticion.urlLocal,
      path:'/productos/CargarTodas',
      payload:{
      }
    }

    this.peticion.Post(post.host + post.path,post.payload).then((res:any) => {
      console.log(res)
    })
  }
  */
}
