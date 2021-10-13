import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorkloadComponent } from '../workload/workload.component';

export const appRoutes: Routes = [
  {
    path: '',
    component: WorkloadComponent,
    children: [
      {
        path: 'workloads',
        loadChildren: './modules/workload.module#WorkloadModule',
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(appRoutes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
