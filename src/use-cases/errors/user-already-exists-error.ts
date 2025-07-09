export class UserAlreadyExistsError extends Error {
  constructor() {
    super('E-mails already exists')
  }
}
