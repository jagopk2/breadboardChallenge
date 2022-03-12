import { Injectable } from '@nestjs/common';
import { Sum } from './entity/sum.entity';

@Injectable()
export class SumService {
  addTwoNumbers(firstNumber: number, secondNumber: number): Sum {
    const result = { result: firstNumber + secondNumber };
    return result;
  }
}
