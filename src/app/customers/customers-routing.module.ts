import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomersFormComponent } from './customers-form/customers-form.component';


const routes: Routes = [
  {
    path: 'customers-form',
    component: CustomersFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
