import { ConflictException } from '@nestjs/common';

export class EntityAlreadyExistsException extends ConflictException{
  constructor ( 
    entityName: string,
    uniquePropertyNames: string[]
  ){
    super(`${entityName} already exists with provided properties: ${uniquePropertyNames.join(', ')}`);
  }
}