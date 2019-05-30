import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DemoComponent implements OnInit {
  num1:number=0;
  num2:number=0;
  ans:number=0;
  constructor() { }

  ngOnInit() {
  }
  onAdd()
  {
    this.ans=this.num1+this.num2;
  }
}
