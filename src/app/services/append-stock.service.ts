import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppendStockService {

  private stockSource = new Subject<Object>()
  stockInfo = this.stockSource.asObservable()

  private noteSrc = new Subject<string>()
  newNote = this.noteSrc.asObservable()

  sendNote(message: string) {
    this.noteSrc.next(message)
  } 

  sendStockInfo(symbol: string[]) {
    this.stockSource.next(symbol)
  }

  constructor() { }

}
