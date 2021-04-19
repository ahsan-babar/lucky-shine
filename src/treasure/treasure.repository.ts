import { EntityRepository } from 'typeorm';
import { BaseRepository } from '../shared/base.repository';
import config from 'config';
import { Treasure } from './treasure.entity';

@EntityRepository(Treasure)
export class TreasureRepository extends BaseRepository<Treasure> {

}