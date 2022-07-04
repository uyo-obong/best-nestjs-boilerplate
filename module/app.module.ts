import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TransactionLogModule } from './transaction/src/transaction_log/transaction-log.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),

    MongooseModule.forRootAsync({
      useFactory: async (config: ConfigService) => ({
        uri: process.env.MONGODB_CONNECTION,
        keepAlive: true,
      }),
      inject: [ConfigService],
    }),

    TransactionLogModule,
  ],
})
export class AppModule {}
