import {Inject, Injectable} from '@nestjs/common';
import { CreateUserDto } from '../create-user.dto';
import { UserRepository } from '../../repositories/user-repository.interface';
import { MailProvider } from '../../providers/mail-provider.interface';
import { User } from '../../Entities/user';
import Omit = jest.Omit;

@Injectable()
export class CreateUserService {
  constructor(
    @Inject('UserRepository') private userRepository: UserRepository,
    @Inject('MailProvider') private mailProvider: MailProvider
  ) {}

  async createUser(userDTO: CreateUserDto): Promise<Omit<User,'password'>> {
    const userAlreadyExists = await this.userRepository.findByEmail(
      userDTO.email
    );

    if (userAlreadyExists) {
      throw new Error('User already exists.');
    }

    let user = new User(userDTO);
    user = await this.userRepository.save(user);

    if (user) {
      const { name, email } = userDTO;
      await this.sendEmail(name, email);
      return user;
    } else {
      throw new Error('Something went wrong on user creation.');
    }
  }

  private async sendEmail(name: string, email: string) {
    await this.mailProvider.sendMail({
      to: {
        name: name,
        email: email
      },
      from: {
        name: 'Meu app SOLID',
        email: 'meu_app@solid.com'
      },
      subject: 'Seja bem vinda!',
      body: '<p>Voce já pode fazer login no app</p>'
    });
  }
}
