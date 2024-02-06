import { Module } from '@nestjs/common';
import { ComptaModule } from './compta/compta.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
      ConfigModule.forRoot({isGlobal: true}), 
      ComptaModule,
      MongooseModule.forRoot(
        `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PWD}@${process.env.MONGO_DNS}`,
        {dbName : "db-chappy-compta"}
      )
    ]})
export class AppModule {}