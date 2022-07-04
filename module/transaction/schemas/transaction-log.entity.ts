import { Entity, Column, ObjectID, ObjectIdColumn } from "typeorm";

@Entity('transactions')
export class TransactionLog {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  title: string;

  @Column({ default: () => new Date(Date.now()) })
  created: Date;
}
