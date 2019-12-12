import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appSalaryColor]'
})
export class SalaryColorDirective {

  @Input()
  appSalaryColor;

  constructor(private element: ElementRef) {
    setTimeout(() => {
      const nativeElement: HTMLElement = this.element.nativeElement
      const salary = parseFloat(this.appSalaryColor)
      nativeElement.style.color =  salary > 20000 ? 'green' : 'red'
    }, 2000)
  }

}
