import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { ComponentsModule } from './components/components.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(
      process.env.MONGO_URI,
      { useFindAndModify: false }
    ),
    ComponentsModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
