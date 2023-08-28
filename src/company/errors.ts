import { ServerError } from '@app/utils';

export class CompanyDidNotCreateException extends ServerError {
  constructor() {
    super(`COMPANY-CREATE-ERR`, 'Error while creating company', 500);
  }
}

export class CompanyNotFoundException extends ServerError {
  constructor(id: number) {
    super(`COMPANY-NOT-FOUND-ERR`, `Company with ${id} not found.`, 404);
  }
}
