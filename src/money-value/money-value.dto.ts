import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, Min, Max, IsInt } from 'class-validator';

export class UpdateMoneyValueDto {

    @ApiProperty({ type: 'number' })
    @IsOptional()
    @IsInt()
    @Min(10)
    @Max(30)
    amt!: number;
}