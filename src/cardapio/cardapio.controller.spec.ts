import { Test, TestingModule } from '@nestjs/testing';
import { CardapioController } from './cardapio.controller';
import { CardapioService } from './cardapio.service';

describe('CardapioController', () => {
  let controller: CardapioController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CardapioController],
      providers: [CardapioService],
    }).compile();

    controller = module.get<CardapioController>(CardapioController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
