import { Pipe, PipeTransform } from '@angular/core';
import { studentClass } from './student-test/studentClass';

@Pipe({
  name: 'studfilter'
})
export class StudfilterPipe implements PipeTransform {

  transform(value: studentClass[], args: string): any {
    return value.filter((a)=>a.s_name.startsWith(args));
  }

}
