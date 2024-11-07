import { Container } from 'inversify';
import { SERVICE_MODULE } from '../service/service.module';
import { AccountController } from './account/account.controller';
import { CONTROLLER_REGISTRY } from './controller.registry';

import lazy from 'inversify-inject-decorators';

const _MODULE = new Container({
  autoBindInjectable: true,
  defaultScope: 'Singleton',
});

export const CONTROLLER_MODULE = Container.merge(_MODULE, SERVICE_MODULE);

CONTROLLER_MODULE.bind(CONTROLLER_REGISTRY.ACCOUNT).to(AccountController);

const { lazyInject: injectController } = lazy(CONTROLLER_MODULE);
