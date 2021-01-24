import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Angular Material
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { TemplateModule } from './template/template.module';
import { CustomersModule } from './customers/customers.module';
import { ContactModule } from './contact/contact.module';
import { CustomersService } from './customers.service';
import { AuthService } from './auth.service';
import { ContactService } from './contact.service';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LayoutComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    AppRoutingModule,
    TemplateModule,
    CustomersModule,
    ContactModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatProgressSpinnerModule,
    BrowserAnimationsModule
  ],
  providers: [CustomersService, AuthService, ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
