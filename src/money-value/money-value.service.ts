import { Injectable, NotFoundException } from '@nestjs/common';
import { MoneyValue } from './money-value.entity';
import { MoneyValueRepository } from './money-value.repository';

@Injectable()
export class MoneyValueService {

  constructor(
    private readonly moneyValueRepository: MoneyValueRepository
  ) { }

  async update(treasureId: number, updateDto: any): Promise<MoneyValue> {
    const money = await this.moneyValueRepository.findOne({
      where: { treasure_id: treasureId }
    });
    if (money) {
      let _money = new MoneyValue();
      _money.amt = updateDto.amt ;
      _money = this.moneyValueRepository.merge(money, _money);
      return this.moneyValueRepository.save(_money);
    }

    throw new NotFoundException('Treasure Value Not Found')

  }

}
