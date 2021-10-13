import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { LayoutModule } from './shared/layout/layout.module';
import { ApplicationErrorComponent } from './shared/components/application-error/application-error.component';
import { WorkloadComponent } from './modules/workload/workload.component';
import { WorkloadModule } from './modules/workload/workload.module';
import { UserWorkloadsComponent } from './modules/workload/components/user-workloads/user-workloads.component';
import { OnboardWorkloadsComponent } from './modules/workload/components/onboard-workloads/onboard-workloads.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    WorkloadComponent,
    ApplicationErrorComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    LayoutModule,
    DashboardModule,
    WorkloadModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
