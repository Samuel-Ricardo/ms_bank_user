import { Container } from 'inversify';
import { HTTP_SERVER_REGISTRY } from './http.register';
import { HTTPExpressServer } from './express/express.server';
import { ENGINE_MODULE } from '../../engine/engine.module';
import { CONFIG_MODULE } from '../../config/config.module';
import { ROUTER_MODULE } from '../../../application/router/router.module';

const _MODULE = new Container({
  autoBindInjectable: true,
  defaultScope: 'Singleton',
});

export const HTTP_SERVER_MODULE = Container.merge(
  _MODULE,
  ENGINE_MODULE,
  CONFIG_MODULE,
  ROUTER_MODULE,
);

HTTP_SERVER_MODULE.bind(HTTP_SERVER_REGISTRY.EXPRESS).to(HTTPExpressServer);
