import { Component, Input, OnInit } from '@angular/core';

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
  
}
