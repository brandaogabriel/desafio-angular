import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Customer } from './customers/customer';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CustomersService {
  private url = 'http://localhost:3000/customers';

  constructor(private http: HttpClient) {}

  create(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(this.url, customer);
  }

  update(customer: Customer): Observable<any> {
    return this.http.put<Customer>(`${this.url}/${customer.id}`, customer);
  }

  delete(customer: Customer): Observable<any> {
    return this.http.delete<Customer>(`${this.url}/${customer.id}`);
  }

  getCustomers(): Observable<Customer[]> {
    return this.http.get<any>(this.url);
  }

  getCustomerById(id: number): Observable<Customer> {
    return this.http.get<Customer>(`${this.url}/${id}`);
  }
}
