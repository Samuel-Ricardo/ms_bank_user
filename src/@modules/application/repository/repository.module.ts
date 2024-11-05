import { Container } from 'inversify';
import { PRISMA_REPOSITORY_MODULE } from './prisma/prisma.module';

import lazy from 'inversify-inject-decorators';

const _MODULE = new Container({
  autoBindInjectable: true,
  defaultScope: 'Singleton',
});

export const REPOSITORY_MODULE = Container.merge(
  _MODULE,
  PRISMA_REPOSITORY_MODULE,
);

export const { lazyInject: injectRepository } = lazy(REPOSITORY_MODULE);
