import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { UserInterface } from '../domain/user';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

const api = 'https://private-9d65b3-tinnova.apiary-mock.com/users';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  createUserList(): void {
    if (!localStorage.getItem('users')) {
      this.getUsers().subscribe((users) => {
        localStorage.setItem('users', JSON.stringify(users));
      });
    }
  }

  getUsers() {
    return this.http
      .get<UserInterface[]>(api)
      .pipe(catchError(this.errorHandler));
  }

  getLocalStorageUsers() {
    return localStorage.getItem('users');
  }

  deleteUser(user: string): void {
    const userData = localStorage.getItem('users');
    if (userData) {
      const newUsers = JSON.parse(userData);
      const index = newUsers.findIndex(
        (u: UserInterface) => JSON.stringify(u) === user
      );
      if (index >= 0) {
        newUsers.splice(index, 1);
        localStorage.setItem('users', JSON.stringify(newUsers));
      }
    }
  }

  createUser(user: UserInterface): void {
    const userData = localStorage.getItem('users');
    const newUsers = userData ? JSON.parse(userData) : [];
    newUsers.push(user);
    localStorage.setItem('users', JSON.stringify(newUsers));
  }

  updateUser(cpf: string, user: UserInterface): void {
    const userData = localStorage.getItem('users');
    if (userData) {
      const users = JSON.parse(userData);
      const updatedUsers = users.map((u: UserInterface) =>
        u.cpf === cpf ? user : u
      );
      localStorage.setItem('users', JSON.stringify(updatedUsers));
    }
  }

  private errorHandler(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(`API returned ${error.status}`);
    }
    return throwError('An error occurred, please try again later.');
  }
}
