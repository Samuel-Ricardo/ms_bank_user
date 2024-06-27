import { Container } from 'inversify';
import { EXPRESS_HTTP_MIDDLEWARE_MODULE } from './express/express.module';
import { HTTP_MIDDLEWARE_REGISTRY } from './http.registry';

const _MODULE = new Container({
  autoBindInjectable: true,
  defaultScope: 'Singleton',
});

export const HTTP_MIDDLEWARE_MODULE = Container.merge(
  _MODULE,
  EXPRESS_HTTP_MIDDLEWARE_MODULE,
);