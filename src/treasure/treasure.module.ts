import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TreasureController } from './treasure.controller';
import { TreasureRepository } from './treasure.repository';
import { TreasureService } from './treasure.service';

@Module({
    imports: [TypeOrmModule.forFeature([TreasureRepository])],
    providers: [TreasureService],
    controllers: [TreasureController],
})
export class TreasureModule { }
