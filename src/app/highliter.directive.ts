import { Directive, Input, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHighliter]'
})
export class HighliterDirective {

  public backgroundcolor:string;
  @Input() defaultcolor:string;
  // public highlightcolor:string="blue";

  constructor() {
    this.backgroundcolor=this.defaultcolor;
   }
   ngOnInit(){
     this.backgroundcolor="pink"
   }

   @HostListener('mouseenter') mouseover(){
    // this.backgroundcolor="this.highlightcolor";
    this.backgroundcolor="blue";
   }
   @HostListener('mouseleave') mouseleave(){
    this.backgroundcolor=this.defaultcolor;
   }
   @HostBinding('style.backgroundColor') get setColor(){
     return this.backgroundcolor;
   }
}
