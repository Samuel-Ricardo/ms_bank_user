import { Container } from 'inversify';
import { SERVER_ENGINE_MODULE } from './server/server.module';

const _MODULE = new Container({
  autoBindInjectable: true,
  defaultScope: 'Singleton',
});

export const ENGINE_MODULE = Container.merge(_MODULE, SERVER_ENGINE_MODULE);
