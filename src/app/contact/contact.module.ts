import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar'

import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact.component';
import { EditComponent } from './edit/edit.component';

@NgModule({
  declarations: [ContactComponent, EditComponent],
  imports: [
    CommonModule,
    ContactRoutingModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatToolbarModule,
    MatInputModule,
    MatTabsModule,
    MatTableModule,
    MatIconModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatSnackBarModule
  ],
  exports: [ContactComponent, EditComponent],
})
export class ContactModule {}
