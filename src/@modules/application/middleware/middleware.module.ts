import { Container } from 'inversify';
import { HTTP_MIDDLEWARE_MODULE } from './http/http.module';

const _MODULE = new Container({
  autoBindInjectable: true,
  defaultScope: 'Singleton',
});

export const MIDDLEWARE_MODULE = Container.merge(
  _MODULE,
  HTTP_MIDDLEWARE_MODULE,
);
