import { Component, Input } from '@angular/core'
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'ngbd-modal-content',
  templateUrl:'./top-stocks-popup.component.html',
  styleUrls:['./top-stocks-popup.component.css']
})

/** This component contains all the content and does work with that content */
export class NgbdModalContent {
  @Input() name:any;

  constructor(public activeModal: NgbActiveModal) {}

}

@Component({
  selector: 'app-top-stocks-popup',
  templateUrl: './top-stocks-popup.component.html'
})

/** This component serves as the communication link between the popup NgbdModal and our main app */
export class TopStocksPopupComponent {
  
  constructor(private modalService: NgbModal) {}

  pullCompanyData(companyName:string) {
    // Run company name through a service that pulls historical and biographical data to be made available for NgbdModal
    
  }

  open(instanceName:string) {
    const modalRef = this.modalService.open(NgbdModalContent);
    modalRef.componentInstance.name = instanceName;
  }
}