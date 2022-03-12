import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getBreadBoard(): string {
    return 'Hi, This is the solution of the Take Home Assignment';
  }
}
