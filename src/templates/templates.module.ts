import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { TemplatesController } from './templates.controller';
import { TemplatesService } from './templates.service';
import { TemplateSchema } from './schemas/template.schema';

@Module({
    imports: [
      MongooseModule.forFeature([{name: 'Template', schema: TemplateSchema}])
    ],
    controllers: [TemplatesController],
    providers: [TemplatesService]
})

export class TemplatesModule {}
