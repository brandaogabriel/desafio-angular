import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';
import { CustomersFormComponent } from './customers-form/customers-form.component';
import { CustomersListComponent } from './customers-list/customers-list.component';

const routes: Routes = [
  {
    path: 'customers',
    component: LayoutComponent,
    children: [
      {
        path: 'form',
        component: CustomersFormComponent,
      },
      {
        path: 'form/:id',
        component: CustomersFormComponent,
      },
      {
        path: 'list',
        component: CustomersListComponent,
      },
      {
        path: '',
        redirectTo: '/customers/list',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomersRoutingModule {}
