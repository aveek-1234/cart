import { DOCUMENT } from '@angular/common';
import { AfterViewInit, Directive, ElementRef, EventEmitter, Inject, OnDestroy, Output } from '@angular/core';
import { Subscription, filter, fromEvent } from 'rxjs';

@Directive({
  selector: '[clickOutside]'
})
export class ClickOutsideDirective implements AfterViewInit ,OnDestroy {
  @Output()clickOutiside= new EventEmitter<void>();
  clickSubscription: Subscription| undefined;
  constructor( private element:ElementRef, @Inject(DOCUMENT) private document : Document) {}
  
  ngAfterViewInit(): void {
    this.clickSubscription=fromEvent(this.document, 'click').pipe(
      filter((event)=>{
        return !this.isInside(event.target as HTMLElement)
      })
    ).subscribe(()=>{
      this.clickOutiside.emit()
    });
  }
   isInside( elemCheck: HTMLElement): boolean {
    console.log("hi")
    return (elemCheck=== this.element.nativeElement || this.element.nativeElement.contains(elemCheck))
 }

 ngOnDestroy(): void {
   this.clickSubscription?.unsubscribe();
 }
 
}

