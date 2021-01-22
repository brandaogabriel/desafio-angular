import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Customer } from './customers/customer';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  constructor(private http: HttpClient) {

  }

  create(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>('http://localhost:3000/customers', customer);
  }

  getCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>('http://localhost:3000/customers');
  }
}
