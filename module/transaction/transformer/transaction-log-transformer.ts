import { Transformer } from '../../common/transformer/transform';

export class TransactionLogTransformer extends Transformer {
  async transform(transaction: any): Promise<Record<string, any>> {
    return {
      id: transaction.id,
      title: transaction.title,
    };
  }
}
