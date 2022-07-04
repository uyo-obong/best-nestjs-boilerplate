import { Module } from '@nestjs/common';
import { TransactionLogService } from './transaction-log.service';
import { TransactionLogController } from './transaction-log.controller';
import { AuthLog, AuthLogSchema } from '../../schemas/auth.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: AuthLog.name, schema: AuthLogSchema }]),
  ],
  providers: [TransactionLogService],
  controllers: [TransactionLogController],
})
export class TransactionLogModule {}
