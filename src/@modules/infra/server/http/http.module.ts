import { Container } from 'inversify';
import { HTTP_SERVER_REGISTRY } from './http.register';
import { HTTPExpressServer } from './express/express.server';

export const HTTP_SERVER_MODULE = new Container({
  autoBindInjectable: true,
  defaultScope: 'Singleton',
});

HTTP_SERVER_MODULE.bind(HTTP_SERVER_REGISTRY.EXPRESS).to(HTTPExpressServer);
