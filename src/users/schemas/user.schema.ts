import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose'
import mongoose, {HydratedDocument} from 'mongoose'


export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop()
  name: string

  @Prop()
  last_name: string

  @Prop({required:true, unique:true})
  email: string

  @Prop()
  age: number
  
  @Prop()
  password: string
}

export const UserSchema = SchemaFactory.createForClass(User)