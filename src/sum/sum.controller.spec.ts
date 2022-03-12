import { Test, TestingModule } from '@nestjs/testing';

import { SumController } from './sum.controller';
import { SumService } from './sum.service';

describe('SumController', () => {
  let controller: SumController;

  const mockSumService = {
    addTwoNumbers: jest.fn((dto) => {
      return {
        result: 4,
      };
    }),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SumController],
      providers: [SumService],
    })
      .overrideProvider(SumService)
      .useValue(mockSumService)
      .compile();

    controller = module.get<SumController>(SumController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
  it('should add two numbers', () => {
    expect(controller.addNumbers(1, 3)).toEqual({
      result: 4,
    });
  });
});
