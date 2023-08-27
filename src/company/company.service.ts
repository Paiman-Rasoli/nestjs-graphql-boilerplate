import { Injectable } from '@nestjs/common';
import { Company } from './dtos/types.dto';
import { CompanyCreateInput } from './dtos/inputs.dto';
import { CompanyRepository } from './datastore/company.repository';

@Injectable()
export class CompanyService {
  constructor(private readonly companyRepository: CompanyRepository) {}

  async companies(): Promise<Company[]> {
    return this.companyRepository.getAllCompanies();
  }

  async create(input: CompanyCreateInput): Promise<Company> {
    return this.companyRepository.createCompany(input);
  }
}
