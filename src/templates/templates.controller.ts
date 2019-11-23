import { Controller, Post, Get, Param, Body, BadRequestException, Query } from '@nestjs/common';

import { TemplatesService } from './templates.service';
import { CreateTemplateDto } from './dto/create-template.dto';
import { ListTemplatesDto } from './dto/list-templates.dto';

@Controller('templates')
export class TemplatesController {
  constructor(private readonly service: TemplatesService) {}

  @Get()
  findAll(@Query() listTemplatesDto: ListTemplatesDto) {
    return this.service.findAll(listTemplatesDto);
  }

  @Post()
  create(@Body() template: CreateTemplateDto) {
    return this.service.create(template);
  }
}
