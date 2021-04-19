import { NotFoundException } from '@nestjs/common';

export class EntityNotFoundException<T, R extends number|string> extends NotFoundException {
  constructor(
    entity: new () => T,
    id: R
  )
  {

    super(`No ${entity.name} found with id "${id}"`);
  }
}