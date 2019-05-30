import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { employeeModel } from './employeeClass';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit,AfterViewInit {

  @ViewChild('demo') x:ElementRef;

  arrEmp:employeeModel[]=[
    new employeeModel(101,'shur',10000,'Student'),
    new employeeModel(102,'bitu',20000,'Employee')
  ];
  constructor() { }
  onClick(){
    console.log(this.x.nativeElement.value);
  }
  ngAfterViewInit(){
    this.x.nativeElement.value="Shur Patel";
    console.log("Inside After View Init"+this.x.nativeElement);
  }
  ngOnInit() {
  }
  onAddEmp(emp_id,emp_name,emp_salary,emp_desi){
    this.arrEmp.push(new employeeModel(emp_id,emp_name,emp_salary,emp_desi));
  }
  onDelEmp(item){
    this.arrEmp.splice(this.arrEmp.indexOf(item),1);
  }
  onUpdateEmp(item){
    if(item.emp_desi=='Student'){
      item.emp_desi='Employee';
    }
    else if(item.emp_desi=='Employee'){
      item.emp_desi='Admin';
    }
    else{
      item.emp_desi='Student';
    }
  }
 
}
