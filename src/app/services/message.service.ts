import { Injectable } from '@angular/core';

import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

import { MessagesComponent } from '../messages/messages.component';

@Injectable()
export class MessageService {
  // messages: string[] = [];
  bsModalRef: BsModalRef;
  constructor(private modalService: BsModalService) {}

  add(type: string, message: string) {
    const initialState = {
      list: [
        message
      ],
      type: type
    };
    // this.messages.push(message);
    this.bsModalRef = this.modalService.show(MessagesComponent, {initialState});
    this.bsModalRef.content.closeBtnName = 'Close';
  }

  // clear() {
  //   // this.messages = [];
  // }

}
