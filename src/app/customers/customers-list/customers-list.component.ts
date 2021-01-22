import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CustomersService } from 'src/app/customers.service';
import { Customer } from '../customer';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.sass'],
})
export class CustomersListComponent implements OnInit {
  customers: Customer[] = [];
  successMsg: string;
  errorMsg: string;

  constructor(
    private customerService: CustomersService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.customerService.getCustomers().subscribe((response) => {
      this.customers = response;
    });
  }

  newRegister() {
    this.router.navigate(['/customers-form']);
  }

  deleteCustomer(customer: Customer) {
    this.customerService
      .delete(customer)
      .subscribe(
        (response) => {
          this.successMsg = 'Cliente deletado com sucesso';
          this.ngOnInit();
        },
        erro => this.errorMsg = 'Ocorreu um erro ao deletar o cliente'
      );
  }
}
