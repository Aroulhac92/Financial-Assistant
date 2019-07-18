import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BudgetComponent } from './components/budget/budget.component'
import { CalculatorComponent } from './components/calculator/calculator.component'
import { HomeComponent } from './components/home/home.component'
import { PersonalPlannerComponent } from './components/personal-planner/personal-planner.component'

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "budget", component: BudgetComponent},
  {path: "calc", component: CalculatorComponent},
  {path: "pp", component: PersonalPlannerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
