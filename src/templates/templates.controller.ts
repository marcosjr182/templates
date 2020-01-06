import { Controller, Post, Get, Param, Body, Query, Put } from '@nestjs/common';

import { TemplatesService } from './templates.service';
import { CreateTemplateDto } from './dto/create-template.dto';
import { ListTemplatesDto } from './dto/list-templates.dto';
import { UpdateTemplateDto } from './dto/update-template.dto';

@Controller('templates')
export class TemplatesController {
  constructor(private readonly service: TemplatesService) {}

  @Get()
  findAll(@Query() query: ListTemplatesDto) {
    return this.service.findAll(query);
  }

  @Post()
  create(@Body() template: CreateTemplateDto) {
    return this.service.create(template);
  }

  @Get(':version')
  findOne(@Param('version') version: string) {
    return this.service.findOne(version);
  }

  @Put(':version')
  update(
    @Param('version') version: string,
    @Body() template: UpdateTemplateDto,
  ) {
    return this.service.update(version, template);
  }
}
