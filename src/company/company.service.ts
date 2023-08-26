import { Injectable } from '@nestjs/common';
import { Company } from './dtos/types.dto';
import { CompanyCreateInput } from './dtos/inputs.dto';

@Injectable()
export class CompanyService {
  async companies(): Promise<Company[]> {
    return [];
  }

  async create(input: CompanyCreateInput): Promise<Company> {
    //
    console.log(input);
    throw new Error('dsf');
  }
}
