export class Customer {
  readonly firstName: string
  readonly lastName: string
  readonly postalCode: string

  constructor(firstName: string, lastName: string, postalCode: string) {
    this.firstName = firstName
    this.lastName = lastName
    this.postalCode = postalCode
  }
}
