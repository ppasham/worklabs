import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserWorkloadsComponent } from './components/user-workloads/user-workloads.component';
import { OnboardWorkloadsComponent } from './components/onboard-workloads/onboard-workloads.component';



@NgModule({
  declarations: [
    UserWorkloadsComponent,
    OnboardWorkloadsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class WorkloadModule { }
