import { Component, Input } from '@angular/core'
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap'
import { TopStocksDetails } from '../../services/interface'

@Component({
  selector: 'ngbd-modal-content',
  templateUrl:'./top-stocks-popup.component.html',
  styleUrls:['./top-stocks-popup.component.css']
})

/** Provide information to display here */
export class NgbdModalContent {
  @Input() name:string;

  constructor(public activeModal: NgbActiveModal) {}

}

@Component({
  selector: 'app-top-stocks-popup',
  templateUrl: './top-stocks-popup.component.html'
})

/** Do all work in this component */
export class TopStocksPopupComponent {
  
  constructor(private modalService: NgbModal) {}

  pullCompanyData(ticker:string) {
    // Run company name through a service that pulls historical and biographical data to be made available for NgbdModal
    
  }

  open(instance:TopStocksDetails) {

    console.log(instance);
    const modalRef = this.modalService.open(NgbdModalContent);
    modalRef.componentInstance.name = instance.name;
  }
}