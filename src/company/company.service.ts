import { Injectable } from '@nestjs/common';
import { Company } from './dtos/types.dto';
import { CompanyCreateInput } from './dtos/inputs.dto';
import { CompanyRepository } from './datastore/company.repository';
import { CompanyNotFoundException } from './errors';

@Injectable()
export class CompanyService {
  constructor(private readonly companyRepository: CompanyRepository) {}

  async companies(): Promise<Company[]> {
    return this.companyRepository.getAllCompanies();
  }

  async company(id: number): Promise<Company> {
    const company = await this.companyRepository.getCompanyById(id);
    if (!company) {
      throw new CompanyNotFoundException(id);
    }
    return company;
  }

  async create(input: CompanyCreateInput): Promise<Company> {
    return this.companyRepository.createCompany(input);
  }
}
