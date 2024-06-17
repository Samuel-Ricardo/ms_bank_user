import { Container } from 'inversify';
import { ENGINE_MODULE } from '../../../infra/engine/engine.module';
import { ExpressAppRouter } from './express/app.router';
import { HTTP_ROUTER_REGISTRY } from './http.registry';

const _MODULE = new Container({
  autoBindInjectable: true,
  defaultScope: 'Singleton',
});

export const HTTP_ROUTER_MODULE = Container.merge(_MODULE, ENGINE_MODULE);

HTTP_ROUTER_MODULE.bind(HTTP_ROUTER_REGISTRY.APP).to(ExpressAppRouter);
