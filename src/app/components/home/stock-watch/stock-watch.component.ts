import { Component, OnInit } from '@angular/core';
import { StockPullService } from 'src/app/services/stock-pull.service';
import { DateServiceService } from 'src/app/services/date-service.service';
import { TopStocksPopupComponent } from '../../top-stocks-popup/top-stocks-popup.component';
import { TopStocksDetails } from '../../../services/interface'

@Component({
  selector: 'app-stock-watch',
  templateUrl: './stock-watch.component.html',
  styleUrls: ['./stock-watch.component.css']
})
export class StockWatchComponent implements OnInit {

  constructor(private StockPull: StockPullService, private date: DateServiceService, private CompanyPopup: TopStocksPopupComponent) { }

  title:string = "Top Stocks"

  displayCompanyInfo = (stock:TopStocksDetails) => {

    this.CompanyPopup.open(stock)
  }

  topCompanyArray = []

  pullTopSecurities = () => {

    // Save an instance of four random stocks into an array using topIntrinioStocks function
    this.StockPull.topIntrinioStocks().subscribe(data => {
      
      data = {
        securities: data['securities']
      }

      // Create an array where we push our random numbers

      const featuredStockLength = 4
      const arrayToPushNumbers = []

        while (arrayToPushNumbers.length < featuredStockLength) {

          let randomNum1Thru29 = (Math.round(Math.random()*29)) - 1

          !arrayToPushNumbers.includes(randomNum1Thru29) ? arrayToPushNumbers.push(randomNum1Thru29) : ''

        }

        arrayToPushNumbers.map(el => {
          let indivSecurityInstance = data.securities[el];

          indivSecurityInstance = {
            id: indivSecurityInstance['id'],
            name: indivSecurityInstance['name'],
            ticker: indivSecurityInstance['ticker']
          }

          this.topCompanyArray.push(indivSecurityInstance)

        })

      })
  }

  ngOnInit() {

    this.displayCompanyInfo({name: 'Example Stock', id: 'ey675', ticker: 'AAPL'})
  }

  ngAfterContentInit() {
    this.pullTopSecurities()
  }

  showStockDescription = (ticker:string) => {
    let currentDate = this.date.currentDay.join('-').toString()
    this.StockPull.pullStockInfo(ticker).subscribe(data => {
      data.timeSeries = data['Time Series (Daily)']
      console.log(data.timeSeries[currentDate])
    })
  }

}
