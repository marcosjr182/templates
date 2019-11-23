import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Template } from './interfaces/template.interface';
import { CreateTemplateDto } from './dto/create-template.dto';
import { ListTemplatesDto } from './dto/list-templates.dto';
import { UpdateTemplateDto } from './dto/update-template.dto';

@Injectable()
export class TemplatesService {
  
  constructor(
    @InjectModel('Template') private readonly model: Model<Template>
  ) {}

  async create(template: CreateTemplateDto): Promise<Template> {
    return await new this.model(template).save();
  }

  async findAll(listTemplatesDto: ListTemplatesDto): Promise<Template[]> {
    return await this.model.find(listTemplatesDto).exec();
  }

  async update(version: string, template: UpdateTemplateDto): Promise<Template> {
    return await this.model.findOneAndUpdate({ version }, template, { new: true }).exec();
  }
}
