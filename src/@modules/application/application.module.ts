import { Container } from 'inversify';
import { ROUTER_MODULE } from './router/router.module';
import { MIDDLEWARE_MODULE } from './middleware/middleware.module';
import { REPOSITORY_MODULE } from './repository/repository.module';
import { USE_CASE_MODULE } from './use_case/use_case.module';

const _MODULE = new Container({
  autoBindInjectable: true,
  defaultScope: 'Singleton',
});

export const APPLICATION_MODULE = Container.merge(
  _MODULE,
  ROUTER_MODULE,
  MIDDLEWARE_MODULE,
  REPOSITORY_MODULE,
  USE_CASE_MODULE,
);
