import { Test, TestingModule } from '@nestjs/testing';
import { CreateUserController } from '../../src/create-user/create-user.controller';
import { CreateUserService } from '../../src/create-user/services/create-user.service';
import { MailtrapMailProvider } from '../../src/providers/implementations/mailtrap-mail.provider';
import { FakeDbRepository } from '../../src/repositories/implementations/fake-db.repository';

describe('CreateUserController', () => {
  let controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers:[CreateUserService,
        {
          provide: 'MailProvider',
          useClass: MailtrapMailProvider
        },
        {
          provide: 'UserRepository',
          useClass: FakeDbRepository
        }
      ],
      controllers: [CreateUserController]
    }).compile();

    controller =  module.get(CreateUserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
