import { Module } from '@nestjs/common';
import { CompanyService } from './company.service';
import { CompanyResolver } from './company.resolver';

@Module({
  imports: [],
  providers: [CompanyService, CompanyResolver],
})
export class CompanyModule {}
