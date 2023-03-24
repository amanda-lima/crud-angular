import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './components/form/form.component';
import { ListComponent } from './components/list/list.component';
import { ModalComponent } from './components/modal/modal.component';
import { CPFPipe } from './utils/cpfPipe/cpf.pipe';
import { PhonePipe } from './utils/phonePipe/phone.pipe';
import { InputMaskModule } from '@ngneat/input-mask';

@NgModule({
	declarations: [AppComponent, FormComponent, ListComponent, ModalComponent, CPFPipe, PhonePipe],
	imports: [BrowserModule, ReactiveFormsModule, HttpClientModule, AppRoutingModule, FormsModule, InputMaskModule],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
