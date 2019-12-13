import { Component, OnInit } from '@angular/core'
import { SavedStockInfo } from '../../../services/interface'
import { AppendStockService } from '../../../services/append-stock.service'
import { StockPullService } from '../../../services/stock-pull.service'
import { FormControl } from '@angular/forms'
import { GlobalFunctionsService } from 'src/app/services/global-functions.service'
import {  } from '@angular/animations'

@Component({
  selector: 'app-search-stocks',
  templateUrl: './search-stocks.component.html',
  styleUrls: ['./search-stocks.component.css']
})
export class SearchStocksComponent implements OnInit {

  constructor(private stockInfo: StockPullService, private appendStock: AppendStockService, private global: GlobalFunctionsService) { }

  availableStocks: SavedStockInfo[] = []

  savedSymbols:Array<string> = []
  symbolName:string[] = []

  stockSearch = {
    containsInfo: false,
    form: new FormControl(''),
    header: 'Stock Search'
  }

  currentSymbol: string

  searchData = ['1. symbol', '2. name', '4. region', '9. matchScore']

  ngOnInit() {
  }

  saveSymbol(symbol: string, name:string) {
    if (!(this.global.objectArrayContains(this.savedSymbols, symbol))) {
      this.savedSymbols.push(symbol)
      this.symbolName[0] = symbol
      this.symbolName[1] = name
      this.appendStock.sendStockInfo(this.symbolName)
    } else alert('You are already watching that stock.')
  }
  
  // Format the Name and Symbol of results
  checkLength(string: string, charLength: Number) {
    if (string.length > charLength) {
      let arrayName = string.split("")
      while (arrayName.length > charLength) {
        arrayName.pop()
      }
      string = arrayName.join("") +"..."
      return string
    } else { return string }
  }

  clearSearchField() {
    this.stockSearch.form.setValue('');
  }

  // Clears the results area
  removeItem(item: Array<Object>) {
    while (item.length > 0) {
      item.pop()
    }
  }

  // Determines if there is any value to search
  saveInput() {
    if (this.stockSearch.form.value !== "" && this.stockSearch.form.value) {
      this.stockSearch.containsInfo = true;
      this.currentSymbol = this.stockSearch.form.value
    } else {
      this.stockSearch.containsInfo = false
    }
  }

  
  formatPercent(number: number) {
    return Math.round(number*100)
  }

  // Runs the stock name or symbol into the service then saves the return in a variable
  addStockInfo() {
    if (this.stockSearch.containsInfo) {
      this.stockInfo.searchStockInfo(this.currentSymbol).subscribe(data => {
        data.bestMatches.forEach(element => {
          if (element[this.searchData[2]] === "United States") {
            this.availableStocks.push({
              symbol: this.checkLength(element[this.searchData[0]], 5),
              name: this.checkLength(element[this.searchData[1]], 21),
              region: element[this.searchData[2]],
              matchScore: this.formatPercent(element[this.searchData[3]])
            })
          }
        })
      })
    }
  }

  pullSymbols() {
    this.removeItem(this.availableStocks)

    this.saveInput()

    this.addStockInfo()
  }

}
