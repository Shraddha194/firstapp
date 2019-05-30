import { Pipe, PipeTransform } from '@angular/core';
import { employeeModel } from './employee/employeeClass';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value:employeeModel[], args: string): any {

    return value.filter((e1)=>e1.emp_name.startsWith(args));
  }

}
