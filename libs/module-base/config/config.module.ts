import { Module } from '@nestjs/common';
import { ConfigModule as NestConfigModule } from '@nestjs/config';
import { configuration } from './configuration';

const configPath = `${process.cwd()}/libs/module-base/config/envs/${
  process.env.NODE_ENV
}.env`;

@Module({
  imports: [
    NestConfigModule.forRoot({
      isGlobal: true,
      envFilePath: configPath,
      load: [configuration],
    }),
  ],
})
export class ConfigModule {}
