import { Directive, Renderer2, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appFreshBorderBind]'
})
export class FreshBorderDirective {
  @Input(appFreshBorderBind) appFreshBorder: string;
  constructor(private elem: ElementRef, private renderer: Renderer2) {
    console.log(this.creationDate);
    this.renderer.setStyle(this.elem.nativeElement, 'background-color', 'blue');
  }

}
