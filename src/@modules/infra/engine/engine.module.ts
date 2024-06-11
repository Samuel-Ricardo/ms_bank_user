import { Container } from 'inversify';
import { SERVER_ENGINE_MODULE } from './server/server.module';

import lazy from 'inversify-inject-decorators';

const _MODULE = new Container({
  autoBindInjectable: true,
  defaultScope: 'Singleton',
});

export const ENGINE_MODULE = Container.merge(_MODULE, SERVER_ENGINE_MODULE);

export const { lazyInject: injectEngine } = lazy(ENGINE_MODULE);
