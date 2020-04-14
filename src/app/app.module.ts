import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InfoItemComponent } from './info-item/info-item.component';
import { JustUpdatedComponent } from './just-updated/just-updated.component';
import { ChartsComponent } from './charts/charts.component';
import { ChartCardComponent } from './chart-card/chart-card.component';
import { GenderChartComponent } from './gender-chart/gender-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    InfoItemComponent,
    JustUpdatedComponent,
    ChartsComponent,
    ChartCardComponent,
    GenderChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
