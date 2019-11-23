import { IsString, IsOptional, ValidateNested, IsNotEmpty, IsNotEmptyObject } from 'class-validator';
import { TemplateComponent, TemplateInfo } from '../interfaces/template.interface';

export class CreateTemplateDto {
  @IsString()
  @IsOptional()
  readonly description: string;
  
  @IsString()
  @IsNotEmpty()
  readonly version: string;
  
  @IsString()
  @IsNotEmpty()
  readonly status: string;

  @ValidateNested({ each: true })
  readonly components: TemplateComponent[];

  @IsNotEmptyObject()
  readonly info: TemplateInfo;
}
