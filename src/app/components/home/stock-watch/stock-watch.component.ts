import { Component, OnInit } from '@angular/core';
import { StockPullService } from 'src/app/services/stock-pull.service';
import { DateServiceService } from 'src/app/services/date-service.service';
import { TopStocksPopupComponent } from '../../top-stocks-popup/top-stocks-popup.component';

@Component({
  selector: 'app-stock-watch',
  templateUrl: './stock-watch.component.html',
  styleUrls: ['./stock-watch.component.css']
})
export class StockWatchComponent implements OnInit {

  constructor(private StockPull: StockPullService, private date: DateServiceService, private CompanyPopup: TopStocksPopupComponent) { }

  title:string = "Top Stocks"

  displayCompanyInfo = () => {

    this.CompanyPopup.open()
  }

  topCompanyArray = []

  testFunction = () => {

    // Save an instance of four random stocks into an array using topIntrinioStocks function
    this.StockPull.topIntrinioStocks().subscribe(data => {

        data = {
          securities: data['securities'],
          nextPage: data['next_page']
        }

        for (let i = 1; i <=4; i++) {

          let randomNum1Thru100 = (Math.round(Math.random()*100)) - 1

          this.topCompanyArray.push(data.securities[randomNum1Thru100])
        }
      })
  }

  ngOnInit() {
  }

  ngAfterContentInit() {
    this.testFunction()
  }

  showStockDescription = (ticker:string) => {
    let currentDate = this.date.currentDay.join('-').toString()
    this.StockPull.pullStockInfo(ticker).subscribe(data => {
      data.timeSeries = data['Time Series (Daily)']
      console.log(data.timeSeries[currentDate])
    })
  }

}
