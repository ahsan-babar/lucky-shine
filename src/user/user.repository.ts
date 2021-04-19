import { EntityRepository } from 'typeorm';
import { BaseRepository } from '../shared/base.repository';
import config from 'config';
import { User } from './user.entity';

@EntityRepository(User)
export class UserRepository extends BaseRepository<User> {

}