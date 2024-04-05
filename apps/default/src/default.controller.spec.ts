import { Test, TestingModule } from '@nestjs/testing';
import { DefaultController } from './default.controller';
import { DefaultService } from './default.service';

describe('DefaultController', () => {
  let defaultController: DefaultController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [DefaultController],
      providers: [DefaultService],
    }).compile();

    defaultController = app.get<DefaultController>(DefaultController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(defaultController.getHello()).toBe('Hello World!');
    });
  });
});
