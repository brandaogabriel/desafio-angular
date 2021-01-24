import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
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
  id: number;
  linguages = ['Javascript', 'Java', 'Python'];
  linguagesSelected = [];
  rendering = false;

  constructor(
    private customerService: CustomersService,
    private snackBar: MatSnackBar,
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
          this.snackBar.open('Cliente atualizado com sucesso', 'fechar', {
            duration: 2000,
          });
        },
        () => {
          this.snackBar.open(
            'Ocorreu um erro ao tentar atualizar o cliente',
            'fechar',
            {
              duration: 2000,
            }
          );
        }
      );
      this.backToList();
    } else {
      this.createCustomer();
    }
  }

  createCustomer(): void {
    this.customerService.create(this.customer).subscribe(
      () => {
        this.snackBar.open('Cliente cadastrado com sucesso', 'fechar', {
          duration: 2000,
        });
      },
      () => {
        this.snackBar.open(
          'Ocorreu um erro ao tentar cadastrar o cliente',
          'fechar',
          {
            duration: 2000,
          }
        );
      }
    );

    this.backToList();
  }

  onChange(name: string, isChecked: boolean): void {
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
