import { ApiBadRequestResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import {
  BadRequestException,
  Controller,
  Get,
  Param,
  ParseIntPipe,
} from '@nestjs/common';

import { Sum } from './entity/sum.entity';
import { SumService } from './sum.service';

@ApiTags('Sum')
@Controller('sum')
export class SumController {
  constructor(private SumService: SumService) {}

  @Get(':firstNumber/:secondNumber')
  @ApiOkResponse({ type: Sum })
  @ApiBadRequestResponse({
    description:
      'Both Numbers should be numeric or else will get a bad request response',
  })
  addNumbers(
    @Param('firstNumber', ParseIntPipe) firstNumber: number,
    @Param('secondNumber', ParseIntPipe) secondNumber: number,
  ): Sum {
    return this.SumService.addTwoNumbers(firstNumber, secondNumber);
  }
}
