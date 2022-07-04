import { Controller, Get, Post, Res } from '@nestjs/common';
import { RestController } from '../../../common/base-controller';
import { TransactionLogTransformer } from '../../transformer/transaction-log-transformer';
import { TransactionLogService } from './transaction-log.service';

@Controller('transaction/log')
export class TransactionLogController extends RestController {
  constructor(private readonly transactionLogService: TransactionLogService) {
    super();
  }

  @Get()
  async getProducts(@Res() res) {
    const transaction = await this.transactionLogService.getTransaction();
    return res.success(
      await this.collection(transaction, new TransactionLogTransformer()),
    );
  }

  @Post('create')
  async create(@Res() res) {
    const transaction = await this.transactionLogService.create();
    return res.success(
      await this.transform(transaction, new TransactionLogTransformer()),
    );
  }
}
