import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserInterface } from 'src/app/domain/user';
import { EditingService } from 'src/app/service/editing.service';
import { UserService } from 'src/app/service/user.service';
import { createMask } from '@ngneat/input-mask';

@Component({
	selector: 'app-modal',
	templateUrl: './modal.component.html',
	styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
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
			cpf: ['', [Validators.required, Validators.minLength(11)]],
			phone: ['', [Validators.required, Validators.minLength(10)]]
		});

		const userSelected = this.editingService.getUserSelected();
		if (userSelected.name) {
			this.updateForm(userSelected);
			this.editMode = true;
		}
	}

	updateUser(): void {
		this.loading = true;
		const updatedUser = {
			name: this.form.controls['name'].value,
			email: this.form.controls['email'].value,
			cpf: this.form.controls['cpf'].value,
			phone: this.form.controls['phone'].value
		} as UserInterface;
		this.userService.updateUser(this.form.controls['cpf'].value, updatedUser);
		this.editingService.setEditingStatus('false', undefined);

		this.loading = false;
	}

	updateForm(user: UserInterface): void {
		this.form.controls['name'].setValue(user.name);
		this.form.controls['email'].setValue(user.email);
		this.form.controls['cpf'].setValue(user.cpf);
		this.form.controls['phone'].setValue(user.phone);
	}

	close() {
		this.editingService.setEditingStatus('false', undefined);
	}

	cpfInputMask = createMask('999.999.999-99');

	phoneInputMask = createMask('(99) 99999-9999');
}
