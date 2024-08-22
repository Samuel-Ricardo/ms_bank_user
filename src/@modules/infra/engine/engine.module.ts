import { Container } from 'inversify';
import { SERVER_ENGINE_MODULE } from './server/server.module';

import lazy from 'inversify-inject-decorators';
import { ENGINE_REGISTRY } from './engine.registry';
import { SWAGGER_ENGINE } from './documentation/swagger.engine';

const _MODULE = new Container({
  autoBindInjectable: true,
  defaultScope: 'Singleton',
});

export const ENGINE_MODULE = Container.merge(_MODULE, SERVER_ENGINE_MODULE);

ENGINE_MODULE.bind(ENGINE_REGISTRY.DOCS.SWAGGER).toConstantValue(
  SWAGGER_ENGINE,
);

export const { lazyInject: injectEngine } = lazy(ENGINE_MODULE);
