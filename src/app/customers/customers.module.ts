import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import  {MatRadioModule } from '@angular/material/radio';



import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersFormComponent } from './customers-form/customers-form.component';
import { CustomersListComponent } from './customers-list/customers-list.component';

@NgModule({
  declarations: [CustomersFormComponent, CustomersListComponent],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    FormsModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatTabsModule,
    MatTableModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatDatepickerModule,
    MatRadioModule
  ],
  exports: [CustomersFormComponent, CustomersListComponent],
})
export class CustomersModule {}
