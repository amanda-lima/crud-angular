import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserInterface } from '../../domain/user';
import { EditingService } from 'src/app/service/editing.service';
import { UserService } from 'src/app/service/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { createMask } from '@ngneat/input-mask';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  title = 'angular-crud-person';
  users: UserInterface[] = [];
  user: UserInterface;
  editMode: boolean;
  form: FormGroup;
  loading: boolean;
  newUser: UserInterface;

  constructor(
    public userService: UserService,
    private statusService: EditingService,
    private formBuilder: FormBuilder,
    public editingService: EditingService
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      cpf: [
        '',
        [
          Validators.required,
          Validators.minLength(11),
        ],
      ],
      phone: ['', [Validators.required, Validators.minLength(11)]],
    });
    this.createUserList();

    const userSelected = this.editingService.getUserSelected();
    if (userSelected.name) {
      this.updateForm(userSelected);
      this.editMode = true;
    }
  }

  ngOnChanges() {
    this.updateForm(this.editingService.getUserSelected());
  }

  createEditingStatus() {
    this.statusService.createEditingStatus();
  }

  createUserList() {
    const localStorageUser = this.userService.getLocalStorageUsers();
    if (localStorageUser) {
      this.users = JSON.parse(localStorageUser);
    }
  }

  isEditing = false;
  currentUserId: number = -1;

  getUsers(): void {
    const localStorageUser = this.userService.getLocalStorageUsers();
    if (localStorageUser) {
      this.users = JSON.parse(localStorageUser);
    }
  }

  getEditingStatus(): string {
    const localStorageStatus = this.editingService.getEditingStatus();
    const user = this.editingService.getUserSelected();

    if (user) {
      console.log('aqui');
      this.updateForm(user);
    }

    return localStorageStatus;
  }

  setEditingStatus(status: boolean) {
    this.editingService.setEditingStatus('status');
  }

  updateForm(user: UserInterface): void {
    this.form.controls['name'].setValue(user.name);
    this.form.controls['email'].setValue(user.email);
    this.form.controls['cpf'].setValue(user.cpf);
    this.form.controls['phone'].setValue(user.phone);
  }

  updateUser(): void {
    this.loading = true;
    const updatedUser = {
      name: this.user.name,
      email: this.form.controls['email'].value,
      cpf: this.user.cpf,
      phone: this.form.controls['phone'].value,
    } as UserInterface;
    this.userService.updateUser(this.form.controls['cpf'].value, updatedUser);
    this.loading = false;
  }

  cancel() {
    this.form.reset();
    this.editingService.setEditingStatus('false');
  }

  createUser(): void {
    this.loading = true;
    this.userService.createUser(this.form.value);
    this.loading = false;

    this.form.reset();
  }

  cpfInputMask = createMask('999.999.999-99');

  phoneInputMask = createMask('(99) 99999-9999');
}