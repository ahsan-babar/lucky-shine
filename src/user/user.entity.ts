import { ApiProperty } from '@nestjs/swagger';
import { PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, Column, Entity, Unique } from 'typeorm';

@Entity()
@Unique(['id', 'email'])
export class User {

  @ApiProperty()
  @PrimaryGeneratedColumn('increment')
  id!: number;

  @ApiProperty()
  @Column()
  name!: string;

  @ApiProperty()
  @Column()
  age!: number;

  @ApiProperty()
  @Column()
  password!: string;

  @ApiProperty()
  @Column()
  email!: string;

  @ApiProperty({ type: "string", format: "date-time" })
  @CreateDateColumn({ type: "timestamp" })
  createdAt!: Date;

  @ApiProperty({ type: "string", format: "date-time" })
  @UpdateDateColumn({ type: "timestamp" })
  updatedAt!: Date;
}
