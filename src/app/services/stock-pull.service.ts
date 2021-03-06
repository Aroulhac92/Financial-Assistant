import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { StockData, StockTrendData, CurrencyData, TechStockInfo, TopStocks } from './interface'
import { TechStocksComponent } from '../components/home/tech-stocks/tech-stocks.component'

@Injectable({
  providedIn: 'root'
})

export class StockPullService {

  constructor(private http: HttpClient) {}

  proxy = 'https://crossorigin.me/'
  stockUrl = 'https://www.alphavantage.co/query?function='
  stockInfo = ['SYMBOL_SEARCH&keywords=', 'TIME_SERIES_DAILY&symbol=']
  apiKey = '&apikey=E5MAZVA23BMWKMJL'
  intrinioAPIKey = 'OjJhMTUwNmE3ZTYwMjI2MzZhZjE5NDBkNDkxMjVmMTI5'
  exchangeCur = 'USD'
  topCurrencies: Array<Object> = []

  pullIntrinioData(input:any) {

    let intrinioData:any
    let intrinioObservables = []

    if (typeof input === "object") {

      intrinioData = new Map()

      intrinioObservables = input.map(el => this.http.get(`https://api-v2.intrinio.com/securities/${el}/prices/realtime?api_key=${this.intrinioAPIKey}`)
      )
  
      intrinioObservables.forEach(el => {
        el.subscribe((data:TechStockInfo) => {
          intrinioData.set(data.security.ticker, data.last_price)
        })
      })

      return intrinioData

    } else if (typeof input === "string") {

      intrinioData = new Object

      return this.http.get(`https://api-v2.intrinio.com/securities/${input}?api_key=${this.intrinioAPIKey}`)

    }

    // return intrinioData
  }

  topIntrinioStocks() {
    return this.http.get<TopStocks>(`https://api-v2.intrinio.com/securities?api_key=${this.intrinioAPIKey}`)
  }

  searchStockInfo(matchWord:string) {
    return this.http.get<StockData>(this.stockUrl + this.stockInfo[0] + matchWord + this.apiKey)
  }

  pullStockInfo(symbol:string) {
    return this.http.get<StockTrendData>(this.stockUrl + this.stockInfo[1] + symbol + this.apiKey)
  }

  pullCryptoData(arrEl:string) {

    return this.http.get<CurrencyData>(this.stockUrl + 'CURRENCY_EXCHANGE_RATE&from_currency=' + arrEl + '&to_currency=' + this.exchangeCur + this.apiKey)
  }
}
