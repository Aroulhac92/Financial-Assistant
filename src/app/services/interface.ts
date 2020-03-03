
export interface StockData {
    bestMatches : Object[]
}

export interface StockTrendData {
    timeSeries: {
        day: {
            open: string,
            high: string,
            low?: string,
            close?: string,
            volume: string
        }
    }
}

export interface Profile {
    results : Object
}

export interface SavedStockInfo {
    name: string,
    symbol: string,
    region?: string,
    matchScore?: number,
}

export interface ImportSavedStock {
    name: symbol,
    symbol: string,
    mktOpen: string,
    high: string
}

export interface CurrencyData {
    realRate: {
        from: string,
        to: string,
        xChange: string
    }
}

export interface TechCompanies {
    ticker:string,
    price:string
}

export interface TechStockInfo {
    last_price:number,
    security: {
        ticker:string
    }
}

export interface TopStocks {
    securities:Array<TopStocksDetails>,
    nextPage:string
}

interface TopStocksDetails {
    id:string,
    name:string
}

export interface NotesObject {
    content:string,
    contentLongerThan70:boolean,
    focused:boolean,
    dimNote:boolean
}