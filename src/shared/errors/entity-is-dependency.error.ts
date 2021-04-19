import { BadRequestException } from '@nestjs/common';

export class EntityIsDependencyException extends BadRequestException{
  constructor ( 
  ){
    super(`Entity is used as dependency in other Entity`);
  }
}