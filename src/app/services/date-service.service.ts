import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateServiceService {

  constructor() { }

  // Date initializer
  date = new Date();

  // Concatenate for full date (Ex. 12-31-2019)
  currentDay: string[] = [
    `${this.date.getFullYear()}`,
    `${this.date.getMonth() < 9 ? '0' + (this.date.getMonth() + 1) : (this.date.getMonth() + 1)}`,
    `${this.date.getDate() < 10 ? '0' + (this.date.getDate()) : (this.date.getDate())}`
  ]

  // Current Time
  currentTime:number[] = [this.date.getHours(), this.date.getMinutes()]

  // Control what date is used to pull stock information
  previousDay() {

    // (31) January, March, May, July, August, October, December (30) April, June, September, November (28) February

    if (parseFloat(this.currentDay[2]) === 1) {
      switch (parseFloat(this.currentDay[1])) {
        case 1: this.currentDay[this.date.getFullYear()-1, '12', '31']
        case 2: this.currentDay[this.date.getFullYear(), '01', '31']
        case 3: this.currentDay[this.date.getFullYear(), '02', '28']
        case 4: this.currentDay[this.date.getFullYear(), '03', '31']
        case 5: this.currentDay[this.date.getFullYear(), '04', '30']
        case 6: this.currentDay[this.date.getFullYear(), '05', '31']
        case 7: this.currentDay[this.date.getFullYear(), '06', '30']
        case 8: this.currentDay[this.date.getFullYear(), '07', '31']
        case 9: this.currentDay[this.date.getFullYear(), '08', '31']
        case 10: this.currentDay[this.date.getFullYear(), '09', '30']
        case 11: this.currentDay[this.date.getFullYear(), '10', '31']
        case 12: this.currentDay[this.date.getFullYear(), '11', '30']
      }
    } else {
      this.currentDay[2] = `${parseFloat(this.currentDay[2]) < 11 ? '0' + (parseFloat(this.currentDay[2])-1) : (parseFloat(this.currentDay[2])-1)}`
    }
  }
}
