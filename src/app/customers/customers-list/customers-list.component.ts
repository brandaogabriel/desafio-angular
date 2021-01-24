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
  rendering = false;

  constructor(
    private customerService: CustomersService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.createLoading();
    this.customerService.getCustomers().subscribe((response) => {
      this.customers = response;
    });
  }

  createLoading(): void {
    this.rendering = true;
    setTimeout(() => {
      this.rendering = false;
    }, 1250);
  }

  newRegister() {
    this.router.navigate(['/customers/form']);
  }

  deleteCustomer(customer: Customer) {
    this.customerService.delete(customer).subscribe(
      () => {
        this.successMsg = 'Cliente deletado com sucesso';
        this.ngOnInit();
      },
      () => (this.errorMsg = 'Ocorreu um erro ao deletar o cliente')
    );
  }
}
