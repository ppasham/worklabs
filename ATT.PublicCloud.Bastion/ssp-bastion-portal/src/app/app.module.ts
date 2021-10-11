import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WorkloadComponent } from './modules/workload/workload.component';
import { EndpointComponent } from './modules/endpoint/endpoint.component';
import { HttpComponent } from './modules/allow/http/http.component';
import { BinaryComponent } from './modules/allow/binary/binary.component';
import { TicketComponent } from './modules/ticket/ticket.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    WorkloadComponent,
    EndpointComponent,
    HttpComponent,
    BinaryComponent,
    TicketComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
