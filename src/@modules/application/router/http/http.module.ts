import { Container } from 'inversify';
import { ENGINE_MODULE } from '../../../infra/engine/engine.module';
import { ExpressAppRouter } from './express/app.router';

const _MODULE = new Container({
  autoBindInjectable: true,
  defaultScope: 'Singleton',
});

export const EXPRESS_HTTP_ROUTER_MODULE = Container.merge(
  _MODULE,
  ENGINE_MODULE,
);

EXPRESS_HTTP_ROUTER_MODULE.bind(ExpressAppRouter);
