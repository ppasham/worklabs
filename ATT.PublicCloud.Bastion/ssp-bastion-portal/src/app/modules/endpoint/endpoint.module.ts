import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserEndpointsComponent } from './components/user-endpoints/user-endpoints.component';
import { CreateEndpointsComponent } from './components/create-endpoints/create-endpoints.component';



@NgModule({
  declarations: [
    UserEndpointsComponent,
    CreateEndpointsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class EndpointModule { }
