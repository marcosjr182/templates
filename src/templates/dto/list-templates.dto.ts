import { IsString, IsOptional } from 'class-validator';

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
