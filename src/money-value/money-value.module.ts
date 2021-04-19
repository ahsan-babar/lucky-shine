import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MoneyValueController } from './money-value.controller';
import { MoneyValueRepository } from './money-value.repository';
import { MoneyValueService } from './money-value.service';

@Module({
    imports: [TypeOrmModule.forFeature([MoneyValueRepository])],
    providers: [MoneyValueService],
    controllers: [MoneyValueController],
})
export class MoneyValueModule { }
