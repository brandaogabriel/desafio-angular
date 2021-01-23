import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { MatSnackBar } from '@angular/material/snack-bar';

import { Contact } from './contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.sass'],
})
export class ContactComponent implements OnInit {
  formRequest: FormGroup;
  contacts: Contact[] = [];
  columnsOrder = ['id', 'name', 'email', 'phoneNumber', 'edit', 'delete'];
  rendering = false;
  editingContact = false;

  constructor(
    private contactService: ContactService,
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private router: Router,
    private activedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.createLoading();
    this.createForm();
    this.listContacts();
  }

  createLoading(): void {
    this.rendering = true;
    setTimeout(() => {
      this.rendering = false;
    }, 1250);
  }

  createForm(): void {
    this.formRequest = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', Validators.required],
    });
  }

  listContacts(): void {
    this.contactService
      .getCustomers()
      .subscribe((response) => (this.contacts = response));
  }

  onSubmit(): void {
    this.createLoading();
    const formValues = this.formRequest.value;

    let contact = new Contact(
      formValues.name,
      formValues.email,
      formValues.phoneNumber
    );

    this.contactService.create(contact).subscribe((response) => {
      this.contacts.push(response);
      this.listContacts();
      this.snackBar.open('O contato foi adicionado', 'fechar', {
        duration: 2000,
      });
      this.formRequest.reset();
    });
  }

  updateContact(contactId: number): void {
    this.editingContact = true;
    this.ngOnInit();
    this.router.navigate([`/contacts/${contactId}`]);
    // let contact: Contact;
    // this.contactService.getContactById(contactId).subscribe((response) => {
    //   contact = response;
    //   this.formRequest.patchValue({
    //     name: response.name,
    //     email: response.email,
    //     phoneNumber: response.phoneNumber,
    //   });
    // });
  }

  deleteContact(contact: Contact): void {
    this.contactService.delete(contact).subscribe((response) => {
      this.snackBar.open('O contato foi removido com sucesso', 'fechar', {
        duration: 2000,
      });
      this.ngOnInit();
    });
  }

  backToList(): void {
    this.router.navigate(['/']);
  }
}
