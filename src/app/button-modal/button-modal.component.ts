import { Component, OnInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { ModalCreditsComponent } from '../modal-credits/modal-credits.component';

@Component({
  selector: 'app-button-modal',
  templateUrl: './button-modal.component.html',
  styleUrls: ['./button-modal.component.css']
})
export class ButtonModalComponent implements OnInit {
  bsModalRef: BsModalRef;
  constructor(private modalService: BsModalService) {}

  openModalWithComponent() {
    const initialState = {
      list: [
        'Open a modal with component',
        'Pass your data',
        'Do something else',
        '...'
      ],
      title: 'Modal with component'
    };
    this.bsModalRef = this.modalService.show(ModalCreditsComponent, {initialState});
    this.bsModalRef.content.closeBtnName = 'Close';
  }

  ngOnInit() {
  }

}
