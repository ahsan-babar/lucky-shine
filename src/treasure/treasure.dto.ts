import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsIn, Min, Max, IsLongitude, IsLatitude, IsInt } from 'class-validator';

export class FindTreasureDto {

    @ApiProperty()
    @IsNotEmpty()
    @IsLongitude()
    longtitude!: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsLatitude()
    latitude!: string;

    @ApiPropertyOptional({ type: 'number' })
    @IsOptional()
    @IsInt()
    @Min(10)
    @Max(30)
    amt?: number;
}

export class TreasureDistanceDto {

    @ApiProperty({ type: 'number', enum: [1, 10] })
    @IsNotEmpty()
    @IsIn([1, 10])
    distance!: number;
}