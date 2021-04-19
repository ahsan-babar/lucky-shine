import { Injectable } from '@nestjs/common';
import { MoneyValue } from '../money-value/money-value.entity';
import { FindTreasureDto } from './treasure.dto';
import { TreasureRepository } from './treasure.repository';

@Injectable()
export class TreasureService {
    constructor(
        private readonly treasureRepository: TreasureRepository
    ) { }

    searchTreasureByQuery(conditions: FindTreasureDto) {
        console.log(conditions)
        const { longtitude, latitude, amt } = conditions;

        let query = this.treasureRepository
            .createQueryBuilder('treasure')
            .innerJoin(MoneyValue, "money", "treasure.id = money.treasure_id")
            .where(`treasure.longtitude  = :longtitude`, { longtitude })
            .andWhere(`treasure.latitude = :latitude`, { latitude });

        if (amt) {
            query = query.andWhere(`money.amt = :amt`, { amt })
        }
        return query.getMany();
    }
}
