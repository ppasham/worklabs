import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpRoutingModule } from './http-routing.module';
import { ViewHttpAllowListComponent } from './components/view-http-allow-list/view-http-allow-list.component';
import { SearchHttpAllowListComponent } from './components/search-http-allow-list/search-http-allow-list.component';


@NgModule({
  declarations: [
    ViewHttpAllowListComponent,
    SearchHttpAllowListComponent
  ],
  imports: [
    CommonModule,
    HttpRoutingModule
  ]
})
export class HttpModule { }
