import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { configuration } from '../config/configuration';
import { CompanyModule } from '../company/company.module';
import { GraphQLModule } from 'libs/module-base';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `${process.cwd()}/config/env/${process.env.NODE_ENV}.env`,
      load: [configuration],
    }),
    GraphQLModule.forRoot({
      moduleName: 'app',
      codeFirstApproach: true,
      playground: true,
    }),
    CompanyModule,
  ],
})
export class AppModule {}
