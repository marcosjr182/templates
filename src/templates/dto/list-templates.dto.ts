import { IsString, Allow, IsBoolean, IsOptional } from 'class-validator';
import { Type, Transform } from 'class-transformer';

export class ListTemplatesDto {
  
  @IsOptional()
  readonly client: string;
  
  @IsString()
  @IsOptional()
  readonly campaign: string;
  
  @IsOptional()
  @IsString()
  readonly status: string;
}
