import { IsOptional } from 'class-validator';

export class CustomerSearchDto {
  @IsOptional()
  integratedKeyword?: string;

  @IsOptional()
  birthday?: string;
  @IsOptional()
  businessType?: string;
  @IsOptional()
  state?: string;
  @IsOptional()
  isGroup?: string;
  @IsOptional()
  grade?: string;
}
