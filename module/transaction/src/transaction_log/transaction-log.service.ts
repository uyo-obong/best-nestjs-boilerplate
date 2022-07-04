import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TransactionLog } from '../../schemas/transaction-log.entity';
import { MongoRepository } from 'typeorm';

@Injectable()
export class TransactionLogService {
  constructor(
    @InjectRepository(TransactionLog)
    private readonly productModel: MongoRepository<TransactionLog>,
  ) {}

  async getTransaction() {
    return await this.productModel.find();
  }

  async create() {
    return await this.productModel.save({
      title: 'testing',
    });
  }
}
