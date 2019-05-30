import { Component, OnInit } from '@angular/core';
import { Task } from './task';
import { from } from 'rxjs';

@Component({
  selector: 'app-todoex',
  templateUrl: './todoex.component.html',
  styleUrls: ['./todoex.component.scss']
})
export class TodoexComponent implements OnInit {
  arr:Task[]=[
      new Task('1','push Your Code to git hub','Pending'),
      new Task('2','email to your Manager','Done')
  ];
  arr1:Task[]=this.arr;
  onSearch(searchTerm){
    
    if(searchTerm!=''){
      this.arr=this.arr1;
      this.arr=this.arr.filter((x)=>x.title.startsWith(searchTerm));
    }
    else{
      this.arr=this.arr1;
    }
   
  }
  onAddTask(id,title,status){
    this.arr.push(new Task(id,title,status));
  }
  onDeleteTask(item){
    this.arr.splice(this.arr.indexOf(item),1);
  }
  onUpdateTask(item){

    if(item.status=='Done'){
      item.status='Pending';
    }
    else{
      item.status='Done';
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
