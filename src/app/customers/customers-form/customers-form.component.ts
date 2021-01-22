import { Component, OnInit } from '@angular/core';
import { CustomersService } from 'src/app/customers.service';

import { Customer } from '../customer';

@Component({
  selector: 'app-customers-form',
  templateUrl: './customers-form.component.html',
  styleUrls: ['./customers-form.component.sass'],
})
export class CustomersFormComponent implements OnInit {

  customer: Customer;
  success: boolean = false;
  error: boolean = false;

  linguages = ['Javascript', 'Java', 'Python'];
  linguagesSelected = [];

  constructor(private customerService: CustomersService) {
    this.customer = new Customer();
  }

  ngOnInit(): void {}

  onSubmit() {
    this.customerService
      .create(this.customer)
      .subscribe(response => {
        this.success = true;
      }, error => {
        this.error = true;
      });

  }

  onChange(name: string, isChecked: boolean) {
    if(isChecked) {
      this.linguagesSelected.push(name);
    }
    else {
      //TODO FIX LAST INDEX
      const index = this.linguages.findIndex(value => value === name);
      this.linguagesSelected.splice(index, 1);
    }
    this.customer.linguages = [... this.linguagesSelected];
  }

}
