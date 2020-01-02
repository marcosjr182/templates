import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigService } from 'nestjs-config';

import { BootstrapModule } from './bootstrap.module';
import { TemplatesModule } from './templates/templates.module';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    BootstrapModule,
    TemplatesModule,
    MongooseModule.forRootAsync({
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get('database.uri'),
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
