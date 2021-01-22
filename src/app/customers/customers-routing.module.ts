import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomersFormComponent } from './customers-form/customers-form.component';
import { CustomersListComponent } from './customers-list/customers-list.component';

const routes: Routes = [
  {
    path: 'customers-form',
    component: CustomersFormComponent,
  },
  {
    path: 'customers-form/:id',
    component: CustomersFormComponent,
  },
  {
    path: 'customers-list',
    component: CustomersListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomersRoutingModule {}
