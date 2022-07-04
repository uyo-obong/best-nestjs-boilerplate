import { Injectable } from '@nestjs/common';
import { AuthLog, AuthLogDocument } from '../../schemas/auth.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class TransactionLogService {
  constructor(
    @InjectModel(AuthLog.name)
    private AuthLogModel: Model<AuthLogDocument>,
  ) {}

  async getTransaction() {
    return await this.AuthLogModel.find().exec();
  }

  async create(): Promise<AuthLog> {
    const auth = new this.AuthLogModel({
      title: 'testing',
    });

    return await auth.save();
  }
}
