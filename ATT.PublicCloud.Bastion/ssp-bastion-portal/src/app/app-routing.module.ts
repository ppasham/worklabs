import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { OnboardWorkloadsComponent } from './modules/workload/components/onboard-workloads/onboard-workloads.component';
import { UserWorkloadsComponent } from './modules/workload/components/user-workloads/user-workloads.component';
import { WorkloadComponent } from './modules/workload/workload.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: './modules/dashboard.module#DashboardModule',
      }
    ]
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: '',
        loadChildren: './modules/dashboard.module#DashboardModule',
      }
    ]
  },
  {
    path: 'workloads',
    pathMatch: 'full',
    component: WorkloadComponent,
    children: [
      {
        path: 'workloads',
        loadChildren: () => import('./modules/workload/workload.module').then(m => m.WorkloadModule),
      }
    ]
  },
  {
    path: 'workloads/view',
    pathMatch: 'full',
    children: [
      {
        path: '',
        component: UserWorkloadsComponent,
        loadChildren: () => import('./modules/workload/workload.module').then(m => m.WorkloadModule),
      }
    ]
  },
  {
    path: 'workloads/onboard',
    pathMatch: 'full',
    children: [
      {
        path: '',
        component: OnboardWorkloadsComponent,
        loadChildren: () => import('./modules/workload/workload.module').then(m => m.WorkloadModule),
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
