import { Component, Input, OnInit } from '@angular/core';

interface NavToggle{
  screenWidth: number;
  collapsed: boolean;
}
@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

  isNavCollapsed = false;
  screenWidth = 0;

  onTogglenav(data: NavToggle): void {
    this.screenWidth = data.screenWidth;
    this.isNavCollapsed = data.collapsed;
  }


  @Input() collapsed = false;

  getPanelClass(): string{
    let styleClass = '';
    if(this.collapsed && this.screenWidth > 768){
      styleClass = 'panel-trimmed';
    } 
    else if(this.collapsed && this.screenWidth <= 768 && this.screenWidth > 0){
      styleClass = 'panel-md-screen'
    }
    return styleClass;
  }
  
 
  constructor() { }

  ngOnInit(): void {
  }
  
}
