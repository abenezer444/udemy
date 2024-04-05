import { NestFactory } from '@nestjs/core';
import { DefaultModule } from './default.module';

async function bootstrap() {
  const app = await NestFactory.create(DefaultModule);
  await app.listen(3000);
}
bootstrap();
