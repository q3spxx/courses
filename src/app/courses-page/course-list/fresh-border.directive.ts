import { Directive, Renderer2, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appFreshBorder]'
})
export class FreshBorderDirective implements OnInit {
  public freshColor = 'green';
  public upComingColor = 'blue';
  @Input() creationDate: Date;
  constructor(private elem: ElementRef, private renderer: Renderer2) {
  }
  ngOnInit() {
    const currentDate = new Date();
    if (this.creationDate.getTime() < currentDate.getTime() &&
    this.creationDate.getTime() >= currentDate.getTime() - 14 * 86400000) {
      this.renderer.setStyle(this.elem.nativeElement, 'border-color', this.freshColor);
    } else if (this.creationDate.getTime() > currentDate.getTime()) {
      this.renderer.setStyle(this.elem.nativeElement, 'border-color', this.upComingColor);
    }
  }

}
