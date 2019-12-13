import { Component, OnInit } from '@angular/core';
import { TechCompanies } from '../../../services/interface'
import { StockPullService } from '../../../services/stock-pull.service'
import { trigger, state, transition, style, animate } from '@angular/animations';
import { formatCurrency } from '@angular/common';

@Component({
  selector: 'app-tech-stocks',
  templateUrl: './tech-stocks.component.html',
  styleUrls: ['./tech-stocks.component.css'],
  animations: [
    trigger('changeEl', [

      state('void', style({ opacity: 0, transform: 'translateX(40px)' })),

      transition('*<=>*', [
        animate(400)
      ])
    ])
  ]
})

export class TechStocksComponent implements OnInit {

  constructor(private stockPull: StockPullService) { }

  topTechCompanies = new Map

  selectedCompany:TechCompanies

  counter:number = 0

  ngOnInit() {
    this.topTechCompanies = this.stockPull.pullIntrinioData(this.techCompaniesArr)
  }

  ngDoCheck() {

    this.selectedCompany = {
      ticker: this.techCompaniesArr[this.counter],
      price: formatCurrency(this.topTechCompanies.get(this.techCompaniesArr[this.counter]), 'en-US', '')
    }
  }

  techTitle: string = 'top companies in tech'

  techCompaniesArr:Array<string> =['AAPL', 'MSFT', 'BA', 'CAT']

  incrementCounter() {
    if (this.techCompaniesArr.length - 1 > this.counter) {
      this.counter++
    }
  }

  decrementCounter() {
    if (this.counter > 0) {
      this.counter--
    }
  }
}