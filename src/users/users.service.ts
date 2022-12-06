import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import {InjectModel} from '@nestjs/mongoose';
import {User, UserDocument} from './schemas/user.schema'
import {Model} from 'mongoose'



@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private usersModel: Model<UserDocument>){}


  create(createUserDto: CreateUserDto) {
    return this.usersModel.create(createUserDto)
  }

  findAll() {
    return this.usersModel.find().lean();
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
