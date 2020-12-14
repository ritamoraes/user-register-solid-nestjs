import { Module } from '@nestjs/common';
import { CreateUserController } from './create-user.controller';
import {CreateUserService} from "./services/create-user.service";
import {MailtrapMailProvider} from "../providers/implementations/mailtrap-mail.provider";
import {FakeDbRepository} from "../repositories/implementations/fake-db.repository";

@Module({
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
})
export class CreateUserModule {}
