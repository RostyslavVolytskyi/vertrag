import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';

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
    AppRoutingModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
