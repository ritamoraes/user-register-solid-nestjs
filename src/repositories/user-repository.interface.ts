import { User } from '../Entities/user';

export interface UserRepository {
  findByEmail(email: string): Promise<User>;
  save(user: User): Promise<User>;
}
