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
    let cls = 'alert alert-';
    cls += (this.type === 'Error') ? 'danger' : 'success';
    return cls;
  }

  ngOnInit() {
  }

}
