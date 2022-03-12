import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class SumDTO {
  @ApiProperty()
  @IsNumber()
  firstNumber: number;
  @ApiProperty()
  @IsNumber()
  secondNumber: number;
}
