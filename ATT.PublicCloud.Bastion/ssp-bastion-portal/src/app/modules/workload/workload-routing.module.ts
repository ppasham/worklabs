import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OnboardWorkloadsComponent } from './components/onboard-workloads/onboard-workloads.component';
import { UserWorkloadsComponent } from './components/user-workloads/user-workloads.component';

export const workloadRoutes: Routes = [
  {
    path: 'workloads/view',
    pathMatch: 'full',
    component: UserWorkloadsComponent,
    children: [
      {
        path: '',
        loadChildren: './modules/workload.module#WorkloadModule',
      }
    ]
  },
  {
    path: 'workloads/onboard',
    pathMatch: 'full',
    component: OnboardWorkloadsComponent,
    children: [
      {
        path: '',
        loadChildren: './modules/workload.module#WorkloadModule',
      }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(workloadRoutes)],
  exports: [RouterModule]
})
export class WorkloadRoutingModule { }
