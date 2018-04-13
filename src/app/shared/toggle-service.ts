import { EventEmitter } from '@angular/core';

export class ToggleService {

  isOpen = false;

  toggleSelected = new EventEmitter<boolean>();

  constructor() {
  }

  emitToggle(toggle:boolean){
    this.toggleSelected.emit(toggle);
  }

}
