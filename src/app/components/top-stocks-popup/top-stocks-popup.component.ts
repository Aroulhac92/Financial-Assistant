import { Component, Input } from '@angular/core'
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap'
import { TopStocksDetails } from '../../services/interface'
import { StockPullService } from 'src/app/services/stock-pull.service';
import { trigger, state, style, animate, transition } from '@angular/animations';

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
  templateUrl: './top-stocks-popup.component.html',
  animations: [
    trigger('openClose', [
      state('open', style({
        opacity: 1
      })),
      state('closed', style({
        opacity: 0
      })),
      transition('open <=> closed', [
        animate('1s')
      ])
    ])
  ]
})

/** Do all work in this component */
export class TopStocksPopupComponent {
  
  constructor(private modalService: NgbModal, private stockPull: StockPullService) {}
  
  isOpen:boolean;
  
  pullCompanyData(ticker:string) {
    // Run company name through a service that pulls historical and biographical data to be made available for NgbdModal
    this.stockPull.pullStockInfo(ticker).subscribe(data => {
      console.log(data)
    })
  }

  open(instance:TopStocksDetails) {
    const modalRef = this.modalService.open(NgbdModalContent);
    modalRef.componentInstance.name = instance.name;
    this.isOpen = true
    // this.pullCompanyData(instance.ticker)
  }
}