import { Module } from '@nestjs/common';
import { CompanyModule } from '../company/company.module';
import { ConfigModule, GraphQLModule } from 'libs/module-base';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptions } from '../data-source';

@Module({
  imports: [
    ConfigModule,
    GraphQLModule.forRoot({
      moduleName: 'app',
      codeFirstApproach: true,
      playground: true,
    }),
    TypeOrmModule.forRoot(dataSourceOptions),
    CompanyModule,
  ],
})
export class AppModule {}
