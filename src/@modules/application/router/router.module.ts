import { Container } from 'inversify';
import { HTTP_ROUTER_MODULE } from './http/http.module';

const _MODULE = new Container({
  autoBindInjectable: true,
  defaultScope: 'Singleton',
});

export const ROUTER_MODULE = Container.merge(_MODULE, HTTP_ROUTER_MODULE);
