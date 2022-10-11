import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SampleRoutingModule } from './sample-routing.module';
import { TestComponent } from './test/test.component';


@NgModule({
  declarations: [
    TestComponent
  ],
  imports: [
    CommonModule,
    SampleRoutingModule
  ]
})
export class SampleModule { }
