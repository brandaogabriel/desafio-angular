import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

import { CustomersService } from 'src/app/customers.service';
import { Customer } from '../customer';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.sass'],
})
export class CustomersListComponent implements OnInit {
  rendering = false;
  customers: Customer[] = [];
  columnsOrder = [
    'id',
    'name',
    'lastName',
    'gen',
    'birthDate',
    'state',
    'linguages',
    'edit',
    'delete',
  ];

  constructor(
    private customerService: CustomersService,
    private snackBar: MatSnackBar,
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
        this.snackBar.open('O cliente foi removido com sucesso', 'fechar', {
          duration: 2000,
        });
        this.ngOnInit();
      },
      () => {
        this.snackBar.open(
          'Ocorreu um erro ao tentar remover o cliente',
          'fechar',
          {
            duration: 2000,
          }
        );
      }
    );
  }
}
