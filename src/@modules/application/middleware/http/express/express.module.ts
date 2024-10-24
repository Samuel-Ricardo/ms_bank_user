import { Container } from 'inversify';
import { EXPRESS_HTTP_MIDDLEWARE_REGISTRY } from './express.registry';
import { ERROR_MIDDLEWARE } from './error/error.middleware';
import { ERROR_LOGGER_MIDDLEWARE } from './logger/error/logger.middleware';
import { LOGGER_MIDDLEWARE } from './logger/logger.middleware';

export const EXPRESS_HTTP_MIDDLEWARE_MODULE = new Container({
  autoBindInjectable: true,
  defaultScope: 'Singleton',
});

EXPRESS_HTTP_MIDDLEWARE_MODULE.bind(
  EXPRESS_HTTP_MIDDLEWARE_REGISTRY.ERROR,
).toConstantValue(ERROR_MIDDLEWARE);

EXPRESS_HTTP_MIDDLEWARE_MODULE.bind(
  EXPRESS_HTTP_MIDDLEWARE_REGISTRY.LOGGER.REQUEST,
).toConstantValue(LOGGER_MIDDLEWARE);

EXPRESS_HTTP_MIDDLEWARE_MODULE.bind(
  EXPRESS_HTTP_MIDDLEWARE_REGISTRY.LOGGER.ERROR,
).toConstantValue(ERROR_LOGGER_MIDDLEWARE);
