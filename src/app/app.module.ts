import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonalPlannerComponent } from './components/personal-planner/personal-planner.component';
import { BudgetComponent } from './components/budget/budget.component';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { CryptocurrencyComponent } from './components/home/cryptocurrency/cryptocurrency.component';
import { StockWatchComponent } from './components/home/stock-watch/stock-watch.component';
import { AdviceComponent } from './components/home/advice/advice.component';
import { TechStocksComponent } from './components/home/tech-stocks/tech-stocks.component';
import { MyStockWatchComponent } from './components/home/my-stock-watch/my-stock-watch.component';
import { SearchStocksComponent } from './components/home/search-stocks/search-stocks.component';
import { NotesComponent } from './components/home/notes/notes.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonalPlannerComponent,
    BudgetComponent,
    CalculatorComponent,
    NavComponent,
    FooterComponent,
    HomeComponent,
    CryptocurrencyComponent,
    StockWatchComponent,
    AdviceComponent,
    TechStocksComponent,
    MyStockWatchComponent,
    SearchStocksComponent,
    NotesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
