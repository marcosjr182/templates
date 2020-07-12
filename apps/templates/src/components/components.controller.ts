import { Controller, Post, Get, Body, Param, Put } from '@nestjs/common';
import { ComponentsService } from './components.service';
import { CreateComponentDto } from './dto/create-component.dto';
import { Component } from './schemas/component.schema';
import { UpdateComponentDto } from './dto/update-component.dto';

@Controller('components')
export class ComponentsController {
  constructor(private readonly service: ComponentsService) {}

  @Post()
  async create(
    @Body() createComponentDto: CreateComponentDto
  ): Promise<Component> {
    return this.service.create(createComponentDto);
  }

  @Put(':name')
  async update(
    @Param('name') name: string,
    @Body() updateComponentDto: UpdateComponentDto
  ) {
    if (name === updateComponentDto.name) {
      return await this.service.update(updateComponentDto);
    }
  }

  @Get(':name')
  async findOne(@Param('name') name: string): Promise<Component> {
    return this.service.findOne(name);
  }

  @Get()
  async findAll(): Promise<Component[]> {
    return this.service.findAll();
  }
}
