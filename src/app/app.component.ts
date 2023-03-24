import { Component, Input, Output, EventEmitter } from '@angular/core';
import { EditingService } from './service/editing.service';
import { UserService } from 'src/app/service/user.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'teste-tinnova';
	constructor(public editingService: EditingService, public userService: UserService) {}

	isViewing: boolean = true;

	changeView(value: boolean) {
		this.isViewing = value;
	}

	ngOnInit() {
		this.userService.createUserList();
		this.editingService.createEditingStatus();
	}
}
