import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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
    private router: Router
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
      .getContacts()
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

    this.contactService.create(contact).subscribe(
      (response) => {
        this.contacts.push(response);
        this.listContacts();
        this.snackBar.open('O contato foi adicionado', 'fechar', {
          duration: 2000,
        });
        this.formRequest.reset();
      },
      () => {
        this.snackBar.open(
          'Ocorreu um erro ao tentar adicionar o contato',
          'fechar',
          {
            duration: 2000,
          }
        );
      }
    );
  }

  updateContact(contactId: number): void {
    this.editingContact = true;
    this.ngOnInit();
    this.router.navigate([`/contacts/${contactId}`]);
  }

  deleteContact(contact: Contact): void {
    this.contactService.delete(contact).subscribe(
      () => {
        this.snackBar.open('O contato foi removido com sucesso', 'fechar', {
          duration: 2000,
        });
        this.ngOnInit();
      },
      () => {
        this.snackBar.open(
          'Ocorreu um erro ao tentar remover o contato',
          'fechar',
          {
            duration: 2000,
          }
        );
      }
    );
  }

  backToHome(): void {
    this.router.navigate(['/']);
  }
}
