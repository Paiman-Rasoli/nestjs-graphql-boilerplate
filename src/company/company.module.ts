import { Module } from '@nestjs/common';
import { CompanyService } from './company.service';
import { CompanyResolver } from './company.resolver';
import { TypeOrmModule } from '@app/module-base';
import { CompanyRepository } from './datastore/company.repository';

@Module({
  imports: [TypeOrmModule.forRepository([CompanyRepository])],
  providers: [CompanyService, CompanyResolver],
})
export class CompanyModule {}
