import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersFormComponent } from './customers-form/customers-form.component';


@NgModule({
  declarations: [CustomersFormComponent],
  imports: [
    CommonModule,
    CustomersRoutingModule
  ],
  exports: [
    CustomersFormComponent
  ]
})
export class CustomersModule { }
