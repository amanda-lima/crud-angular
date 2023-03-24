import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserInterface } from 'src/app/domain/user';
import { EditingService } from 'src/app/service/editing.service';
import { UserService } from 'src/app/service/user.service';

@Component({
	selector: 'app-list',
	templateUrl: './list.component.html',
	styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
	users: UserInterface[] = [];
	newUser: UserInterface = {
		name: '',
		cpf: '',
		phone: '',
		email: ''
	};
	currentUserId: number = -1;

	constructor(
		public userService: UserService,
		private statusService: EditingService,
		public editingService: EditingService
	) {}

	editing: boolean = false;
	modal: boolean = true;

	getEditingStatus(): string {
		return this.statusService.getEditingStatus();
	}

	getUsers(): void {
		const userLocalStorage = this.userService.getLocalStorageUsers();
		if (userLocalStorage) {
			this.users = JSON.parse(userLocalStorage);
		}
	}

	setEditingStatus(user: UserInterface) {
		if (user) {
			this.editingService.setEditingStatus('true', user);
		} else {
			this.editingService.setEditingStatus('false');
		}
	}

	ngOnInit(): void {
		this.getUsers();
		this.userService.createUserList();
	}

	editUser(user: UserInterface) {
		this.newUser = user;
		this.statusService.setEditingStatus('true', user);
	}

	deleteUser(user: UserInterface) {
		this.userService.deleteUser(JSON.stringify(user));
		this.getUsers();
	}

	openModal(user: UserInterface) {
		this.modal = true;
		this.editingService.setEditingStatus('true', user);
	}
}
