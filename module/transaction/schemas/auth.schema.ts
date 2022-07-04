import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type AuthLogDocument = AuthLog & Document;

@Schema()
export class AuthLog {
  @Prop()
  event_type: string;

  @Prop()
  model_name: string;

  @Prop()
  payload: string;

  @Prop({ default: () => new Date(Date.now()) })
  created: Date;

  @Prop({ default: () => new Date(Date.now()) })
  updated: Date;
}

export const AuthLogSchema = SchemaFactory.createForClass(AuthLog);
