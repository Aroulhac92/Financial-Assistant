import { PersonalPlannerComponent } from './components/personal-planner/personal-planner.component'
import { CryptocurrencyComponent } from './components/home/cryptocurrency/cryptocurrency.component'
import { TopStocksPopupComponent, NgbdModalContent} from './components/top-stocks-popup/top-stocks-popup.component'
import { MyStockWatchComponent } from './components/home/my-stock-watch/my-stock-watch.component'
import { SearchStocksComponent } from './components/home/search-stocks/search-stocks.component'
import { StockWatchComponent } from './components/home/stock-watch/stock-watch.component'
import { TechStocksComponent } from './components/home/tech-stocks/tech-stocks.component'
import { CalculatorComponent } from './components/calculator/calculator.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatProgressSpinnerModule, MatButtonModule } from '@angular/material'
import { AdviceComponent } from './components/home/advice/advice.component'
import { NotesComponent } from './components/home/notes/notes.component'
import { BudgetComponent } from './components/budget/budget.component'
import { FooterComponent } from './components/footer/footer.component'
import { ReactiveFormsModule, FormsModule } from '@angular/forms'
import { HomeComponent } from './components/home/home.component'
import { NavComponent } from './components/nav/nav.component'
import { BrowserModule } from '@angular/platform-browser'
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { AppComponent } from './app.component'
import { NgModule } from '@angular/core'


const MaterialComponents = [
  MatProgressSpinnerModule,
  MatButtonModule
]

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
    TopStocksPopupComponent,
    NgbdModalContent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialComponents,
    FormsModule,
    NgbModule
  ],
  entryComponents: [ NgbdModalContent, TopStocksPopupComponent ],
  providers: [ TopStocksPopupComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
