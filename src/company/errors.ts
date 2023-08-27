import { ServerError } from '@app/utils';

export class CompanyDidNotCreateException extends ServerError {
  constructor() {
    super(`COMPANY-CREATE-ERR`, 'Error while creating company', 500);
  }
}
