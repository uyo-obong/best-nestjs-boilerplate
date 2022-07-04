import { Module } from '@nestjs/common';
import { TransactionLogService } from './transaction-log.service';
import { TransactionLogController } from './transaction-log.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TransactionLog } from '../../schemas/transaction-log.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TransactionLog])],
  providers: [TransactionLogService],
  controllers: [TransactionLogController],
})
export class TransactionLogModule {}
