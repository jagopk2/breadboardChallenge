import { ApiProperty } from '@nestjs/swagger';

export class Sum {
  @ApiProperty()
  result: number;
}
