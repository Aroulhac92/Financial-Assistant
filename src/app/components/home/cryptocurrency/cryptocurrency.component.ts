import { Component, OnInit } from '@angular/core'
import { StockPullService } from '../../../services/stock-pull.service'
import { CurrencyData } from '../../../services/interface'
import { GlobalFunctionsService } from '../../../services/global-functions.service'

@Component({
  selector: 'app-cryptocurrency',
  templateUrl: './cryptocurrency.component.html',
  styleUrls: ['./cryptocurrency.component.css']
})
export class CryptocurrencyComponent implements OnInit {

  constructor(private stockInfo: StockPullService, private global: GlobalFunctionsService) { }

  cryptoTitle: string = 'Top 4 cryptocurrencies'

  topCurr: Array<Object> = []

  // For styling and testing
  exampleCurr: Array<Object> = [
    {from: 'Bitcoin', to: 'USD', xChange: '21.15'},
    {from: 'Bitcoin', to: 'USD', xChange: '21.15'},
    {from: 'Bitcoin', to: 'USD', xChange: '21.15'},
    {from: 'Bitcoin', to: 'USD', xChange: '21.15'}
  ]
  
  size:number = 11
  sizeCrypt:number = 12
  cryptocurrencies: Array<string> = ['BTC', 'ETH', 'XRP', 'LTC']

  ngOnInit() {
  }

  ngAfterContentInit() {
    // this.pullTopCrypto()
  }

  convertCurr(name:string) {
    let symbol:string;
    
      switch (name) {
        case 'United States Dollar' :
          symbol = 'USD'
      }

    return symbol
  }

  pullTopCrypto() {
    this.cryptocurrencies.forEach( el => {
      this.stockInfo.pullCryptoData(el).subscribe(data => {
        data = {
          realRate: data['Realtime Currency Exchange Rate']
        }
        data.realRate = {
          from: data.realRate['2. From_Currency Name'],
          to: this.convertCurr(data.realRate['4. To_Currency Name']),
          xChange: this.global.twoDigitDecimal(parseFloat(data.realRate['5. Exchange Rate']))
        }
        this.topCurr.push(data.realRate)
      })
    })
  }

}
