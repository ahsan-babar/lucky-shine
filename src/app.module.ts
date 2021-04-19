import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from './config/config.module';
import { ConfigService } from './config/config.service';
import { ConnectionOptions } from 'typeorm';
import { UserModule } from './user/user.module';
import { TreasureModule } from './treasure/treasure.module';
import { MoneyValueModule } from './money-value/money-value.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        ...configService.get<ConnectionOptions>('mysqlConfiguration'),
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
      })
    }),
    TreasureModule,
    MoneyValueModule,
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
