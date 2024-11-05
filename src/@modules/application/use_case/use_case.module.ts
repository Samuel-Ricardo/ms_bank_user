import { Container } from 'inversify';
import { REPOSITORY_MODULE } from '../repository/repository.module';

import lazy from 'inversify-inject-decorators';
import { USE_CASE_REGISTRY } from './use_case.registry';
import { CreateAccountInRepositoryUseCase } from './account/create.use_case';
import { FindCurrentAccountInRepository } from './account/find/current.use_case';
import { DeleteAccountInRepositoryUseCase } from './account/delete.use_case';

const _MODULE = new Container({
  autoBindInjectable: true,
  defaultScope: 'Singleton',
});

export const USE_CASE_MODULE = Container.merge(_MODULE, REPOSITORY_MODULE);

USE_CASE_MODULE.bind(USE_CASE_REGISTRY.ACCOUNT.CREATE).to(
  CreateAccountInRepositoryUseCase,
);

USE_CASE_MODULE.bind(USE_CASE_REGISTRY.ACCOUNT.FIND.CURRENT).to(
  FindCurrentAccountInRepository,
);

USE_CASE_MODULE.bind(USE_CASE_REGISTRY.ACCOUNT.DELETE).to(
  DeleteAccountInRepositoryUseCase,
);

export const { lazyInject: injectUseCase } = lazy(USE_CASE_MODULE);
