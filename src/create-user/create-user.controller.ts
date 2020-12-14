import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from './create-user.dto';
import { User } from '../Entities/user';
import { CreateUserService } from './services/create-user.service';

@Controller('user')
export class CreateUserController {
  constructor(private createUserService: CreateUserService) {}

  @Post('/create')
  async createUser(@Body() userDTO: CreateUserDto): Promise<Omit<User,'password'>> {
    return this.createUserService.createUser(userDTO);
  }
}
