import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ManagerDashboardComponent } from './managerdashboard/managerdashboard.component';
import { SearchComponent } from './search/search.component';
import { ViewticketsComponent } from './viewtickets/viewtickets.component';

@NgModule({
  declarations: [
    AppComponent,
    ManagerDashboardComponent,
    SearchComponent,
    ViewticketsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
