import { Injectable } from '@angular/core';
import { UserInterface } from '../domain/user';

@Injectable({
	providedIn: 'root'
})
export class EditingService {
	createEditingStatus(): void {
		if (!localStorage.getItem('isEditing')) {
			localStorage.setItem('isEditing', 'false');
		}
		if (!localStorage.getItem('userSelected')) {
			localStorage.setItem('userSelected', JSON.stringify({ name: '', cpf: '', phone: '', email: '' }));
		}
	}

	setEditingStatus(status: string, user?: UserInterface): void {
		localStorage.setItem('isEditing', status);
		localStorage.setItem('userSelected', user ? JSON.stringify(user) : '');
	}

	getEditingStatus(): string {
		return localStorage.getItem('isEditing') || '';
	}

	getUserSelected(): UserInterface {
		return localStorage.getItem('userSelected')
			? JSON.parse(localStorage.getItem('userSelected') || '')
			: { name: '', cpf: '', phone: '', email: '' };
	}
}
