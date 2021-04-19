import { ApiProperty } from '@nestjs/swagger';
import { CreateDateColumn, UpdateDateColumn, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class MoneyValue {

  @ApiProperty()
  @PrimaryGeneratedColumn('increment')
  id!: number;

  @ApiProperty()
  @Column()
  treasure_id!: number;

  @ApiProperty()
  @Column()
  amt!: number;

  @ApiProperty({ type: "string", format: "date-time" })
  @CreateDateColumn({ type: "timestamp" })
  createdAt!: Date;

  @ApiProperty({ type: "string", format: "date-time" })
  @UpdateDateColumn({ type: "timestamp" })
  updatedAt!: Date;
}
