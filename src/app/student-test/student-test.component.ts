import { Component, OnInit } from '@angular/core';
import { studentClass } from './studentClass';

@Component({
  selector: 'app-student-test',
  templateUrl: './student-test.component.html',
  styleUrls: ['./student-test.component.scss']
})
export class StudentTestComponent implements OnInit {
  str:string="watch";
arrStudent:studentClass[]=[
    new studentClass(1,'shur','Rajkot','present'),
    new studentClass(2,'bitu','Dhoraji','absent')
];
flag:boolean=true;
  constructor() { }

  ngOnInit() {
  }
  onSidebar(strr:string){
    this.arrStudent=this.arrStudent.filter((x)=>x.s_name.startsWith(strr));
  }
  onShowForm(){
    if(this.flag==false){
      this.flag=true;
    }
    else{
      this.flag=false;
    }
  }
  onAddStud(s_id,s_name,s_city,s_attendance){
    this.arrStudent.push(new studentClass(s_id,s_name,s_city,s_attendance));
    this.flag=true;
  }
  onDelStud(item){
    this.arrStudent.splice(this.arrStudent.indexOf(item),1);
  }
  onUpdateStud(item){
    if(item.s_attendance=='present'){
      item.s_attendance='absent';
    }
    else{
      item.s_attendance='present';
    }
  }
}
