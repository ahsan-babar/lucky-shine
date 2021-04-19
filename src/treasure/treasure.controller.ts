import { Body, Controller, HttpCode, Param, Post } from '@nestjs/common';
import { ApiBadRequestResponse, ApiNotFoundResponse, ApiOkResponse, ApiParam, ApiTags } from '@nestjs/swagger';
import { FindTreasureDto, TreasureDistanceDto } from './treasure.dto';
import { Treasure } from './treasure.entity';
import { TreasureService } from './treasure.service';

@Controller('treasure')
export class TreasureController {

    constructor(
        private readonly treasureService: TreasureService
    ) { }

    @Post('/search/:distance')
    @HttpCode(200)
    @ApiTags('Treasure')
    @ApiOkResponse({ type: Treasure, isArray: true })
    @ApiNotFoundResponse({ description: 'Not found' })
    @ApiBadRequestResponse({ description: 'Bad request' })
    @ApiParam({
        name: 'distance',
        enum: [1, 10]
    })
    findTreasures(
        @Param('distance') distance: TreasureDistanceDto['distance'],
        @Body() query: FindTreasureDto,
        @Body('longtitude') longtitude: FindTreasureDto['longtitude'],
        @Body('latitude') latitude: FindTreasureDto['latitude'],
        @Body('amt') amt?: FindTreasureDto['amt']

    ): Promise<Treasure[]> {
        return this.treasureService.searchTreasureByQuery({longtitude, latitude, amt});
    }

}
