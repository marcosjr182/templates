import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Component extends Document {
  @Prop({ required: true, unique: true })
  name: string;

  @Prop({ required: true })
  category: string;

  @Prop({ required: true })
  content: string;
}

export const ComponentSchema = SchemaFactory.createForClass(Component);
