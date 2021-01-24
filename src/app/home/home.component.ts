import { Component, OnInit, Output } from '@angular/core';
import { ContactService } from '../contact.service';
import { Contact } from '../contact/contact';
import { CustomersService } from '../customers.service';
import { Customer } from '../customers/customer';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
})
export class HomeComponent implements OnInit {
  rendering = false;

  @Output() customers: Customer[] = [];

  @Output() contacts: Contact[] = [];

  choice: string;

  constructor(
    private customerService: CustomersService,
    private contactService: ContactService
  ) {}

  ngOnInit(): void {
    this.createLoading();
    this.getAllCustomers();
    this.getAllContacts();
  }

  getAllCustomers(): void {
    this.customerService
      .getCustomers()
      .subscribe(response => this.customers = response);
  }

  getAllContacts(): void {
    this.contactService
      .getContacts()
      .subscribe(response => this.contacts = response);
  }

  createLoading(): void {
    this.rendering = true;
    setTimeout(() => {
      this.rendering = false;
    }, 1250);
  }

  confirmed(): void {
    console.log(this.choice);
  }
}
