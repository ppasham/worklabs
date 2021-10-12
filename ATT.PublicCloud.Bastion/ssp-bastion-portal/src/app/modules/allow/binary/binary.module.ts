import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BinaryRoutingModule } from './binary-routing.module';
import { ViewBinaryAllowListComponent } from './components/view-binary-allow-list/view-binary-allow-list.component';
import { SearchBinaryAllowListComponent } from './components/search-binary-allow-list/search-binary-allow-list.component';


@NgModule({
  declarations: [
    ViewBinaryAllowListComponent,
    SearchBinaryAllowListComponent
  ],
  imports: [
    CommonModule,
    BinaryRoutingModule
  ]
})
export class BinaryModule { }
