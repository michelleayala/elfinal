import { Component, Input, OnInit } from '@angular/core';

interface NavToggle{
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.component.html',
  styleUrls: ['./configuracion.component.css']
})
export class ConfiguracionComponent implements OnInit {
  
  isNavCollapsed = false;
  screenWidth = 0;

  onTogglenav(data: NavToggle): void {
    this.screenWidth = data.screenWidth;
    this.isNavCollapsed = data.collapsed;
  }

  @Input() collapsed = false;
  
  getConfiguracionClass(): string{
    let styleClass = '';
    if(this.collapsed && this.screenWidth > 768){
      styleClass = 'Configuracion-trimmed';
    } 
    else if(this.collapsed && this.screenWidth <= 768 && this.screenWidth > 0){
      styleClass = 'Configuracion-md-screen'
    }
    return styleClass;
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
