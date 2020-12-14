import { Test, TestingModule } from '@nestjs/testing';
import { CreateUserService } from '../../src/create-user/services/create-user.service';
import { MailtrapMailProvider } from '../../src/providers/implementations/mailtrap-mail.provider';
import { FakeDbRepository } from '../../src/repositories/implementations/fake-db.repository';

describe('CreateUserService', () => {
  let service;
  let mailProvider;
  let userRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CreateUserService,
        {
          provide: 'MailProvider',
          useClass: MailtrapMailProvider
        },
        {
          provide: 'UserRepository',
          useClass: FakeDbRepository
        }
      ]
    }).compile();

    service = module.get<CreateUserService>(CreateUserService);
    userRepository = module.get(FakeDbRepository);
    mailProvider = module.get(MailtrapMailProvider);

  });

  it('should be defined', () => {
    expect(service).toBeDefined();
    expect(userRepository).toBeDefined();
    expect(mailProvider).toBeDefined();
  });
});
