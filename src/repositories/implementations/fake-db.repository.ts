import {UserRepository} from "../user-repository.interface";
import {User} from "../../Entities/user";
import {Injectable} from "@nestjs/common";

@Injectable()
export class FakeDbRepository implements UserRepository{
    private users: User[] = [];

    findByEmail(email: string): Promise<User> {
        const user = this.users.find((user)=> user.email === email);
        return Promise.resolve(user);
    }

    save(user: User): Promise<User> {
        this.users.push(user);
        return Promise.resolve(user);
    }

}