import { IsString, IsOptional, ValidateNested, IsNotEmpty, IsNotEmptyObject } from 'class-validator';
import { TemplateComponent, TemplateInfo } from '../interfaces/template.interface';

export class UpdateTemplateDto {
  @IsString()
  @IsOptional()
  readonly description: string;
  
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  readonly status: string;

  @IsOptional()
  @ValidateNested({ each: true })
  readonly components: TemplateComponent[];

  @IsOptional()
  @IsNotEmptyObject()
  readonly info: TemplateInfo;
}
