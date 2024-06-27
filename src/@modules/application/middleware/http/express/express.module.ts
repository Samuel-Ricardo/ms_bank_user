import { Container } from 'inversify';
import { EXPRESS_HTTP_MIDDLEWARE_REGISTRY } from './express.registry';
import { ERROR_MIDDLEWARE } from './error/error.middleware';

const EXPRESS_HTTP_MIDDLEWARE_MODULE = new Container({
  autoBindInjectable: true,
  defaultScope: 'Singleton',
});

EXPRESS_HTTP_MIDDLEWARE_MODULE.bind(
  EXPRESS_HTTP_MIDDLEWARE_REGISTRY.ERROR,
).toConstantValue(ERROR_MIDDLEWARE);
