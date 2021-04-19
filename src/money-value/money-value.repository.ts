import { EntityRepository } from 'typeorm';
import { BaseRepository } from '../shared/base.repository';
import { MoneyValue } from './money-value.entity';

@EntityRepository(MoneyValue)
export class MoneyValueRepository extends BaseRepository<MoneyValue> {

}