import { CONTROLLER_MODULE } from './controller.module';
import { AccountController } from './account/account.controller';
import { CONTROLLER_REGISTRY } from './controller.registry';

export const CONTROLLER_FACTORY = {
  ACCOUNT: () =>
    CONTROLLER_MODULE.get<AccountController>(CONTROLLER_REGISTRY.ACCOUNT),
};
