import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Component } from './schemas/component.schema';
import { CreateComponentDto } from './dto/create-component.dto';
import { UpdateComponentDto } from './dto/update-component.dto';

@Injectable()
export class ComponentsService {
  constructor(
    @InjectModel(Component.name) private readonly model: Model<Component>
  ) {}

  async create(createComponentDto: CreateComponentDto): Promise<Component> {
    return new this.model(createComponentDto).save();
  }

  async update(updateComponentDto: UpdateComponentDto): Promise<Component> {
    return this.model.findOneAndUpdate(
      { name: updateComponentDto.name },
      updateComponentDto,
      { new: true }
    )
  }

  async findOne(name: string): Promise<Component> {
    return this.model.findOne({ name: name });
  }

  async findAll(): Promise<Component[]> {
    return this.model.find().exec();
  }
}
