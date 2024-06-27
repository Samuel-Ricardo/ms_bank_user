import { Container } from 'inversify';
import { ROUTER_MODULE } from './router/router.module';
import { MIDDLEWARE_MODULE } from './middleware/middleware.module';

const _MODULE = new Container({
  autoBindInjectable: true,
  defaultScope: 'Singleton',
});

export const APPLICATION_MODULE = Container.merge(
  _MODULE,
  ROUTER_MODULE,
  MIDDLEWARE_MODULE,
);
