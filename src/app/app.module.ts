import { Module } from '@nestjs/common';
import { CompanyModule } from '../company/company.module';
import { ConfigModule, GraphQLModule } from 'libs/module-base';

@Module({
  imports: [
    ConfigModule,
    GraphQLModule.forRoot({
      moduleName: 'app',
      codeFirstApproach: true,
      playground: true,
    }),
    CompanyModule,
  ],
})
export class AppModule {}
