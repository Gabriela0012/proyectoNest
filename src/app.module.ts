import { Module } from '@nestjs/common';
import { MongooseModule} from '@nestjs/mongoose'
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';

@Module({
  imports: [UsersModule, MongooseModule.forRoot(`mongodb+srv://gabriela:135632@ecommerce1.dxk6fgr.mongodb.net/nuevaBase?retryWrites=true&w=majority`)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
