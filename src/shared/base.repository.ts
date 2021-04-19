import { Repository, SaveOptions, DeepPartial, Entity, } from 'typeorm';
import { EntityAlreadyExistsException } from './errors/entity-already-exists.error';

export abstract class BaseRepository<Entity> extends Repository<Entity>{
  save<T extends DeepPartial<Entity>>(entities: T[], options: SaveOptions & { reload: false }): Promise<T[]>;
  save<T extends DeepPartial<Entity>>(entities: T[], options?: SaveOptions): Promise<(T & Entity)[]>;
  save<T extends DeepPartial<Entity>>(entity: T, options: SaveOptions & { reload: false }): Promise<T>;
  save<T extends DeepPartial<Entity>>(entity: T, options?: SaveOptions): Promise<T & Entity>;
  async save<T extends DeepPartial<Entity>>(entityOrEntities: T | T[], options?: SaveOptions): Promise<T | T[]> {
    try {
      if (Array.isArray(entityOrEntities))
        return await super.save<T>(entityOrEntities, options);
      else
        return await super.save<T>(entityOrEntities, options);
    } catch (error) {
      throw error;
    }
  }


  async findMax(
    column: string
  ): Promise<number> {
    let query = this.createQueryBuilder('entity')
      .select(`MAX(entity.${column})`, "max");
    return query.getRawOne();
  }
}
