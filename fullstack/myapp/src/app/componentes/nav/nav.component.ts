import { Component, OnInit, EventEmitter, Output, HostListener } from '@angular/core';
import { navbarData } from './nav-data';

interface NavToggle {
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  @Output() onTogglenav: EventEmitter<NavToggle> = new EventEmitter();
  collapsed = false;
  screenWidth = 0;
  navData = navbarData;

  @HostListener('window:resize',['$event'])
  onResize(event:any){
    this.screenWidth = window.innerWidth;
    if(this.screenWidth <= 768){
      this.collapsed = false;
      this.onTogglenav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
    }
  }

  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
  }
  
  toggleCollapse(): void {
    this.collapsed = !this.collapsed;
    this.onTogglenav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
  }

  closenav(): void {
    this.collapsed = false
    this.onTogglenav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
  }

  constructor() { }

  

}
