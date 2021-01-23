import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Contact } from './contact/contact';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private url = 'http://localhost:3000/contacts';

  constructor(private http: HttpClient) {}

  create(contact: Contact): Observable<Contact> {
    return this.http.post<Contact>(this.url, contact);
  }

  update(contact: Contact): Observable<any> {
    return this.http.put(`${this.url}/${contact.id}`, contact);
  }

  delete(contact: Contact): Observable<any> {
    return this.http.delete<any>(`${this.url}/${contact.id}`);
  }

  getCustomers(): Observable<Contact[]> {
    return this.http.get<any>(this.url);
  }

  getContactById(id: number): Observable<Contact> {
    return this.http.get<Contact>(`${this.url}/${id}`);
  }
}
