import { NestFactory } from '@nestjs/core';
import { AppModule } from './base/core/infrastructure/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}

bootstrap().catch((error) => {
  console.error(error);
  process.exit(1);
});
