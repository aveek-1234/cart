import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appDragDrop]'
})
export class DragDropDirective {
 @Output() private fileEventEmitter : EventEmitter<File[]>= new EventEmitter();
   valid_files: File[]=[];
  constructor() { }

  @HostListener("dragover",["$event"])
  public onDragOver(evt: DragEvent){
    evt.preventDefault();
    evt.stopPropagation();
  }

  @HostListener("dragleave",["$event"])
  public onDragLeave(evt: DragEvent){
    evt.preventDefault();
    evt.stopPropagation();
  }

  @HostListener("drop",["$event"])
  public onDrop(evt: DragEvent){
    evt.preventDefault();
    evt.stopPropagation();
    let file= evt.dataTransfer?.files;
    if(file)
       this.valid_files = Array.from(file);
    
    this.fileEventEmitter.emit( this.valid_files);
  }
}
