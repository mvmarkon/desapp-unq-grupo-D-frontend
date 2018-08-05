import { Component, OnInit } from '@angular/core';

import { MessageService } from '../services/message.service';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  type: string;
  closeBtnName: string;
  list: any[] = [];
  constructor(public bsModalRef: BsModalRef) { }

  tipoDeMensaje() {
    const typeOfMessage = {
      Error: 'alert alert-danger',
      Success: 'alert alert-success',
      Warning: 'alert alert-warning'
    }
    return typeOfMessage[this.type];
  }

  ngOnInit() {
  }

}
