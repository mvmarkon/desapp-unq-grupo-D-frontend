import { Component, OnInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { ModelContentComponent } from '../model-content-component/model-content-component.component'

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})

export class DemoComponent {

    bsModalRef: BsModalRef;
constructor(private modalService: BsModalService) { }

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
  this.bsModalRef = this.modalService.show(ModelContentComponent, { initialState });
  this.bsModalRef.content.closeBtnName = 'Close';
}
  }
