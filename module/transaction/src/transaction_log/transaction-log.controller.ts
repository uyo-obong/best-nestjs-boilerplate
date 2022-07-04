import { Controller, Get, Post, Res } from '@nestjs/common';
import { RestController } from '../../../common/base-controller';
import { TransactionLogTransformer } from '../../transformer/transaction-log-transformer';
import { TransactionLogService } from './transaction-log.service';

@Controller('transaction/log')
export class TransactionLogController extends RestController {
  constructor(private readonly userService: TransactionLogService) {
    super();
  }

  @Get()
  async getProducts(@Res() res) {
    const transaction = await this.userService.getTransaction();
    return res.success(
      await this.collection(transaction, new TransactionLogTransformer()),
    );
  }

  @Post('create')
  async create(@Res() res) {
    const transaction = await this.userService.create();
    return res.success(
      await this.transform(transaction, new TransactionLogTransformer()),
    );
  }
}
