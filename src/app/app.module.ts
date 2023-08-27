import { Module } from '@nestjs/common';
import { CompanyModule } from '../company/company.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptions } from '../data-source';
import { ConfigModule, GraphQLModule } from '@app/module-base';

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
