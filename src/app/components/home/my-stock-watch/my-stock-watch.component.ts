import { Component, OnInit } from '@angular/core';
import { StockPullService } from '../../../services/stock-pull.service';
import { AppendStockService } from '../../../services/append-stock.service';
import { GlobalFunctionsService } from 'src/app/services/global-functions.service';
import { DateServiceService } from 'src/app/services/date-service.service';
import { ImportSavedStock } from 'src/app/services/interface';

@Component({
  selector: 'app-my-stock-watch',
  templateUrl: './my-stock-watch.component.html',
  styleUrls: ['./my-stock-watch.component.css']
})

export class MyStockWatchComponent implements OnInit {

  constructor(private pullStock : StockPullService, private appendStock : AppendStockService, private global: GlobalFunctionsService, private date: DateServiceService) { }

  title = 'Stocks I am Watching'

  // Inserts html to alert if markets are closed
  marketsOpen:boolean;
  needsPlaceholder:boolean;

  // Contains all stocks that you have selected from search
  myStocks:Array<ImportSavedStock> = [];

  ngOnInit() {

    this.appendStock.stockInfo.subscribe(el => {
      this.pullStockInfoBySym(el[0], el[1])
    })
  }
  
  ngDoCheck() {
    this.needsPlaceholder = (this.myStocks.length === 0)
    this.marketsOpen = this.date.currentTime[0] > 16 || (this.date.currentTime[0] === 16 && this.date.currentTime[1] >= 30)
  }

  stockNameLength(name:string) {

    return name.length > 9 ? name.length > 15 ? 'large-word' : 'medium-word' : '';
  }
  
  // Pull the stock trade information using array from stockSearch
  pullStockInfoBySym(newSymbol:string, fullName:symbol) {
    this.pullStock.pullStockInfo(newSymbol).subscribe(data => {
      try {
        data = {
          timeSeries: data['Time Series (Daily)']
        }

        if (data.timeSeries) {
          while (!data.timeSeries[this.date.currentDay.join('-')]) {
            this.date.previousDay()
          }

          data.timeSeries.day = data.timeSeries[this.date.currentDay.join('-')]

          if (data.timeSeries.day) {
            data.timeSeries.day = {
            open: data.timeSeries.day['1. open'],
            high: data.timeSeries.day['2. high'],
            volume: data.timeSeries.day['5. volume']
          }
            this.myStocks.unshift({
              name: fullName,
              symbol: newSymbol,
              mktOpen: this.global.twoDigitDecimal(parseFloat(data.timeSeries.day.open)),
              high: this.global.twoDigitDecimal(parseFloat(data.timeSeries.day.high))
              })
          }
        } else { alert('The selected stock has no available trading data. Please choose another one.') }
      } catch (err) { console.log(err) }
    })
  }
}