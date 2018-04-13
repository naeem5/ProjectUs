import { EventEmitter } from '@angular/core';

export class ModalService {

  isOpen = false;

  modalSelected = new EventEmitter<boolean>();

  constructor() {
  }

  emitModal(modal:boolean){
    this.modalSelected.emit(modal);
  }

}
