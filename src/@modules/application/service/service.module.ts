import { Container } from 'inversify';
import { USE_CASE_MODULE } from '../use_case/use_case.module';
import { AccountService } from './account/account.service';
import { SERVICE_REGISTRY } from './service.registry';

import lazy from 'inversify-inject-decorators';

const _MODULE = new Container({
  autoBindInjectable: true,
  defaultScope: 'Singleton',
});

export const SERVICE_MODULE = Container.merge(_MODULE, USE_CASE_MODULE);

SERVICE_MODULE.bind(SERVICE_REGISTRY.ACCOUNT).to(AccountService);

export const { lazyInject: injectService } = lazy(SERVICE_MODULE);
