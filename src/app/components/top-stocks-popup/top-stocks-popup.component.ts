import { Component, Input } from '@angular/core'
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'ngbd-modal-content',
  template:`
  <div class="container">
    <div class="modal-header">
      <h4 class="modal-title">Hi there!</h4>
      <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
        <p>Hello, {{name}}!</p>
    </div>
    <div class="modal-footer">
        <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">Close</button>
    </div>
  </div>
  `,
  styleUrls:['./top-stocks-popup.component.css']
})
export class NgbdModalContent {
  @Input() name:any;

  constructor(public activeModal: NgbActiveModal) {}

}

@Component({
  selector: 'app-top-stocks-popup',
  templateUrl: './top-stocks-popup.component.html'
})
export class TopStocksPopupComponent {
  
  constructor(private modalService: NgbModal) {}

  open() {
    const modalRef = this.modalService.open(NgbdModalContent);
    modalRef.componentInstance.name = 'World';
  }
}