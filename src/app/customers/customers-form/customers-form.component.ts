import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

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
  id: number;
  linguages = ['Javascript', 'Java', 'Python'];
  linguagesSelected = [];
  rendering = false;

  constructor(
    private customerService: CustomersService,
    private router: Router,
    private activedRoute: ActivatedRoute
  ) {
    this.customer = new Customer();
  }

  ngOnInit(): void {
    this.createLoading();
    this.getCustomerId();
  }

  createLoading(): void {
    this.rendering = true;
    setTimeout(() => {
      this.rendering = false;
    }, 1250);
  }

  getCustomerId(): void {
    let params = this.activedRoute.params;
    params.subscribe((urlParams) => {
      this.id = urlParams['id'];
      if (this.id) {
        this.customerService
          .getCustomerById(this.id)
          .subscribe((response) => (this.customer = response));
      }
    });
  }

  onSubmit() {
    if (this.id) {
      this.customerService.update(this.customer).subscribe(
        () => {
          this.success = true;
        },
        () => {
          this.error = true;
        }
      );
    }
    else {
      this.customerService.create(this.customer).subscribe(
        () => {
          this.success = true;
        },
        () => {
          this.error = true;
        }
      );
    }
  }

  onChange(name: string, isChecked: boolean) {
    if (isChecked) {
      this.linguagesSelected.push(name);
    } else {
      const index = this.linguages.findIndex((value) => value === name);
      this.linguagesSelected.splice(index, 1);
    }
    this.customer.linguages = [...this.linguagesSelected];
  }

  backToList() {
    this.router.navigate(['/customers/list']);
  }
}
