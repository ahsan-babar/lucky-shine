import { NotImplementedException } from '@nestjs/common';
export class AppVersionNotFoundException extends NotImplementedException {
  constructor() {
    super(`Unable to get app version`);
  }
}
