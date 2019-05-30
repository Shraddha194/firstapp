import { Directive, HostListener, Input } from '@angular/core';
import { KeyValuePipe } from '@angular/common';

@Directive({
  selector: '[appCreditcardvalid]'
})
export class CreditcardvalidDirective {

  constructor() { }
  @HostListener('keyup',['$event']) keyupfunc(event:KeyboardEvent) {
  // console.log(event.target.value);
  const input = event.target as HTMLInputElement;
  let trimmed = input.value.replace(/\s+/g, "");
  if(trimmed.length > 16){
    trimmed = trimmed.substr(0, 16);
  }

  let nums = [];
  for (let i = 0; i < trimmed.length; i += 4){
    nums.push(trimmed.substr(i, 4));
  }
  input.value = nums.join(" ");

  }
}
