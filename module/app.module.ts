import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TransactionLogModule } from './transaction/src/transaction_log/transaction-log.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),

    TypeOrmModule.forRoot({
      type: 'mongodb',
      host: process.env.MONGODB_CONNECTION_HOST,
      port: 27017,
      database: process.env.MONGODB_DATABASE,
      autoLoadEntities: true,
      useUnifiedTopology: true,
      useNewUrlParser: true,
    }),

    TransactionLogModule,
  ],
})
export class AppModule {}
