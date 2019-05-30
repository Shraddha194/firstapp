import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @Input() title:string="hello";
  @Output() onMyFunc=new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onSearchstud(stdsearch){
    this.onMyFunc.emit(stdsearch);
  }
}
