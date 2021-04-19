import { Body, Controller, Param, Patch } from '@nestjs/common';
import { ApiBadRequestResponse, ApiNotFoundResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { UpdateMoneyValueDto } from './money-value.dto';
import { MoneyValue } from './money-value.entity';
import { MoneyValueService } from './money-value.service';

@Controller('money-value')
export class MoneyValueController {

  constructor(
    private readonly moneyValueService: MoneyValueService
  ) { }

  @Patch('/:treasureId')
  @ApiTags('Money Value')
  @ApiOkResponse({ type: MoneyValue })
  @ApiNotFoundResponse({ description: 'Not found' })
  @ApiBadRequestResponse({ description: 'Bad request' })
  updateTreasureMoneyValue(
    @Param('treasureId') treasureId: number,
    @Body() updateDto: UpdateMoneyValueDto
  ): Promise<MoneyValue> {
    return this.moneyValueService.update(treasureId, updateDto)
  }
}
