import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { ManagerDashboardComponent } from './managerdashboard/managerdashboard.component';
import { SearchComponent } from './search/search.component';
import { ViewticketsComponent } from './viewtickets/viewtickets.component';
const routes: Routes = [
{path:"search",component:SearchComponent},
{path:"viewtickets",component:ViewticketsComponent},
{path:"managerdashboard",component:ManagerDashboardComponent},
{path:"managerdashboard/search",component:SearchComponent},
{path:"managerdashboard/viewtickets",component:ViewticketsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
