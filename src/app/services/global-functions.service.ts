import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalFunctionsService {

  constructor() { }

  objectArrayContains(arr:Array<string>, testSymbol:string) {
    if (arr.includes(testSymbol)) {
      return true
    }
  }

  twoDigitDecimal(number:number) {
    return number.toFixed(2)
  }
}


