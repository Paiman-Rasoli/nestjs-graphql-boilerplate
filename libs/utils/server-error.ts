import { HttpException } from '@nestjs/common';

export class ServerError extends HttpException {
  code: string; // (unique for errors in a given domain)
  message: string; //(optional description)
  statusCode: number; // (optional HTTP status code such as 403, 404, etc.)

  constructor(code: string, message: string, statusCode: number) {
    super(message, statusCode);
    this.code = code;
    this.message = message;
    this.statusCode = statusCode;
  }
}
