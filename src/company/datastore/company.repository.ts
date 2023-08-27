import { Repository } from 'typeorm';
import { CompanyEntity, CompanySchema } from './company.entity';
import { CompanyDomain } from '../company.domain';
import { mapEntityToDomain } from './company.entity.mapper';
import { CompanyCreateInput } from '../dtos/inputs.dto';
import { generateIntegerId } from '@app/utils';
import { CompanyDidNotCreateException } from '../errors';
import { TypeOrmEntityRepository } from '@app/module-base';

@TypeOrmEntityRepository(CompanySchema)
export class CompanyRepository extends Repository<CompanyEntity> {
  protected createCompanyQueryBuilder() {
    return this.createQueryBuilder();
  }

  async getAllCompanies(): Promise<CompanyDomain[]> {
    const companies = await this.createCompanyQueryBuilder().getMany();
    return companies?.map((company) => mapEntityToDomain(company));
  }

  async createCompany(input: CompanyCreateInput) {
    const company: CompanyEntity = {
      id: generateIntegerId(),
      ...input,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    try {
      await this.insert(company);

      return mapEntityToDomain(company);
    } catch (err) {
      throw new CompanyDidNotCreateException();
    }
  }
}
