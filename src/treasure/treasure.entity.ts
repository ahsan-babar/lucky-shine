import { ApiProperty } from '@nestjs/swagger';
import { CreateDateColumn, UpdateDateColumn, Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Treasure {

  @ApiProperty()
  @PrimaryColumn()
  id!: number;

  @ApiProperty()
  @Column()
  Name!: string;

  @ApiProperty()
  @Column()
  latitude!: string;

  @ApiProperty()
  @Column()
  longtitude!: string;

  @ApiProperty({ type: "string", format: "date-time" })
  @CreateDateColumn({ type: "timestamp" })
  createdAt!: Date;

  @ApiProperty({ type: "string", format: "date-time" })
  @UpdateDateColumn({ type: "timestamp" })
  updatedAt!: Date;
}
