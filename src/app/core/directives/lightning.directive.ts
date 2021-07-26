import { Directive, ElementRef, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[lightning]',
  host: {
    '(mouseenter)': 'onMouseEnter()',
    '(mouseleave)': 'onMouseLeave()'
  }
})
export class LightningDirective{

  @Input() lightColor:string="blue";

  constructor(private element: ElementRef, private renderer: Renderer2) {
    this.setLightning("");
  }
  
  onMouseEnter() {
    this.setLightning(this.lightColor);
  }
  
  onMouseLeave() {
    this.setLightning("");
  }

  setLightning(color:string){
    let boxShadow = "";
    if(color !== ""){
      boxShadow = "0 0 10px " + color;
    }
    this.renderer.setStyle(this.element.nativeElement, "box-shadow", boxShadow);
  }
}
