import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TemplatesModule } from './templates/templates.module';

@Module({
  imports: [
    TemplatesModule,
    MongooseModule.forRoot('mongodb+srv://mail-admin:F3BEzFoR7WFWri1p@cluster0-scvsu.gcp.mongodb.net/mail-templater-api?retryWrites=true&w=majority')
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
