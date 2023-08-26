import { NestFactory } from '@nestjs/core';
import { Logger, ValidationPipe } from '@nestjs/common';
import { AppModule } from './app/app.module';
import { configuration } from './config/configuration';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      forbidNonWhitelisted: true,
      skipMissingProperties: true,
    }),
  );

  const { port, NODE_ENV } = configuration();
  await app.listen(port);

  Logger.log(
    `🚀 Application is running on: http://localhost:${port} Environment: ${NODE_ENV}`,
  );
}

bootstrap();
