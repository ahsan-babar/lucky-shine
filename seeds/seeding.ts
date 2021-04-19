import { Connection } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';
import xlsx from 'xlsx';
import { Treasure } from '../src/treasure/treasure.entity'
import { MoneyValue } from '../src/money-value/money-value.entity';
import { User } from '../src/user/user.entity';

export default class Seeding implements Seeder {
  public async run(factory: Factory, connection: Connection) {

    await connection.createQueryBuilder()
      .delete()
      .from(User)
      .execute();

    await connection.createQueryBuilder()
      .delete()
      .from(Treasure)
      .execute();

    await connection.createQueryBuilder()
      .delete()
      .from(MoneyValue)
      .execute();


    var workbook = xlsx.readFile(__dirname + '/seeds.xlsx');
    var sheet_name_list = ['treasures', 'money_values', 'users'];

    const treasureSeeds: Treasure[] = xlsx.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);
    await connection.createQueryBuilder()
      .insert()
      .into(Treasure, ['id', 'latitude', 'longtitude', 'Name'])
      .values(treasureSeeds)
      .execute();

    const [header, ...moneyValueSeeds]: MoneyValue[] = xlsx.utils.sheet_to_json(workbook.Sheets[sheet_name_list[1]], {
      header: ['treasure_id', 'amt']
    });

    await connection.createQueryBuilder()
      .insert()
      .into(MoneyValue, ['treasure_id', 'amt'])
      .values(moneyValueSeeds)
      .execute();

    const userSeeds: User[] = xlsx.utils.sheet_to_json(workbook.Sheets[sheet_name_list[2]]);
    await connection.createQueryBuilder()
      .insert()
      .into(User, ['id', 'name', 'age', 'password', 'email'])
      .values(userSeeds)
      .execute();
  }
}