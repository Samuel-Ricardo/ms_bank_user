import { Container } from 'inversify';
import { ExpressAppRouter } from './express/app.router';
import { HTTP_ROUTER_REGISTRY } from './http.registry';
import { DOCUMENTATION_MODULE } from '../../../infra/docs/documentation.module';
import { ExpressDocsRouter } from './express/docs.router';
import { ExpressAccountRouter } from './express/account/account.router';
import { CONTROLLER_MODULE } from '../../controller/controller.module';

const _MODULE = new Container({
  autoBindInjectable: true,
  defaultScope: 'Singleton',
});

export const HTTP_ROUTER_MODULE = Container.merge(
  _MODULE,
  DOCUMENTATION_MODULE,
  CONTROLLER_MODULE,
);

HTTP_ROUTER_MODULE.bind(HTTP_ROUTER_REGISTRY.EXPRESS.APP).to(ExpressAppRouter);
HTTP_ROUTER_MODULE.bind(HTTP_ROUTER_REGISTRY.EXPRESS.DOCS).to(
  ExpressDocsRouter,
);
HTTP_ROUTER_MODULE.bind(HTTP_ROUTER_REGISTRY.EXPRESS.ACCOUNT).to(
  ExpressAccountRouter,
);
