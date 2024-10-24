import { Container } from 'inversify';
import { CONFIG_MODULE } from './config/config.module';
import { ENGINE_MODULE } from './engine/engine.module';
import { SERVER_MODULE } from './server/server.module';
import { DOCUMENTATION_MODULE } from './docs/documentation.module';

const _MODULE = new Container({
  autoBindInjectable: true,
  defaultScope: 'Singleton',
});

export const INFRA_MODULE = Container.merge(
  _MODULE,
  CONFIG_MODULE,
  ENGINE_MODULE,
  SERVER_MODULE,
  DOCUMENTATION_MODULE,
);
