import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import { RequestGuard } from './common/utils/guards';
import { ExceptionFilter } from './common/utils/filter';
import { TimeoutInterceptor } from './common/utils/timeout';
import { ValidationPipe } from '@nestjs/common';
import { useContainer } from 'class-validator';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  useContainer(app.select(AppModule), { fallbackOnErrors: true });

  // middlewares, express specific
  app.use(helmet());
  app.use(rateLimit({ windowMs: 60, max: 50 }));

  // guards
  app.useGlobalGuards(new RequestGuard());

  // filters
  const { httpAdapter } = app.get(HttpAdapterHost);
  app.useGlobalFilters(new ExceptionFilter(httpAdapter));

  // interceptors
  app.useGlobalInterceptors(new TimeoutInterceptor());

  // prefix
  app.setGlobalPrefix('api/v1');

  // pipeline validation
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );
  await app.listen(6000);
}
bootstrap();
