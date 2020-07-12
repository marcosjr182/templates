import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ComponentsController } from './components.controller';
import { ComponentsService } from './components.service';
import { ComponentSchema } from './schemas/component.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{
      name: 'Component',
      schema: ComponentSchema
    }])
  ],
  controllers: [ComponentsController],
  providers:   [ComponentsService]
})
export class ComponentsModule {}
