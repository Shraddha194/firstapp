import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-arr-demo',
  templateUrl: './arr-demo.component.html',
  styleUrls: ['./arr-demo.component.scss']
})
export class ArrDemoComponent implements OnInit {
  arr:Todo[]=[
      new Todo('1','Learn Angular','Pending'),
      new Todo('2','Go For Movie','Pending'),
      new Todo('3','Learn JS','Done')
  ];
  constructor() { }

  ngOnInit() {
  }
  onAdd(){
   // this.arr.push(new Todo(this.Id,this.Title,this.Status));

  }
  onDelete(item:Todo){

    this.arr.splice(this.arr.indexOf(item),1);
  }
}
