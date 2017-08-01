import { Directive, HostListener, ViewChildren, ElementRef } from '@angular/core';

@Directive({
  selector: '[dHWSHoverComponent]'
})
export class HoverComponentDirective {
  @ViewChildren('nameDescription', {read: ElementRef}) headingDescription: ElementRef;
  @HostListener('mouseover') revealDescription() {
    console.log('moused over')
    this.headingDescription.nativeElement.style.color = 'white';
  }
  constructor() { }

}
