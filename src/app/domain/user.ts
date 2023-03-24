export class Person {
  constructor(
    public id: number,
    public name: string,
    public cpf: string,
    public phone: string,
    public email: string,
  ) {}
}

export interface UserInterface {
   name: string,
   cpf: string,
   phone: string,
   email: string,
}