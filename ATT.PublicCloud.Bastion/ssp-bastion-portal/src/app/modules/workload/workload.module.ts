import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { UserWorkloadsComponent } from './components/user-workloads/user-workloads.component';
import { OnboardWorkloadsComponent } from './components/onboard-workloads/onboard-workloads.component';
import { workloadRoutes } from './workload-routing.module';

@NgModule({
  declarations: [
    UserWorkloadsComponent,
    OnboardWorkloadsComponent
  ],
  imports: [
    CommonModule,
    [RouterModule.forChild(workloadRoutes)]
  ]

})
export class WorkloadModule { }
