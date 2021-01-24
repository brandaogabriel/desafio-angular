import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';

import { ContactService } from 'src/app/contact.service';
import { Contact } from '../contact';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.sass'],
})
export class EditComponent implements OnInit {
  formEdit: FormGroup;
  rendering = false;
  contactId: number;
  contactToBeEdited: Contact;

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
    this.getContactId();
  }

  createLoading(): void {
    this.rendering = true;
    setTimeout(() => {
      this.rendering = false;
    }, 1250);
  }

  createForm(): void {
    this.formEdit = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', Validators.required],
    });
  }

  getContactId(): void {
    let params = this.activedRoute.params;
    params.subscribe((urlParams) => {
      this.contactId = urlParams['id'];

      if (this.contactId) {
        this.contactService
          .getContactById(this.contactId)
          .subscribe((response) => {
            this.contactToBeEdited = response;
            this.formEdit.patchValue({
              name: response.name,
              email: response.email,
              phoneNumber: response.phoneNumber,
            });
          });
      }
    });
  }

  onSubmit(): void {
    const formValues = this.formEdit.value;
    this.contactToBeEdited.name = formValues.name;
    this.contactToBeEdited.email = formValues.email;
    this.contactToBeEdited.phoneNumber = formValues.phoneNumber;

    this.contactService.update(this.contactToBeEdited).subscribe(() => {
      this.snackBar.open('O contato foi editado com sucesso', 'fechar', {
        duration: 2000,
      });
      this.formEdit.reset();
    });

    this.backToList();
  }

  backToList(): void {
    this.router.navigate(['/contacts']);
  }
}
