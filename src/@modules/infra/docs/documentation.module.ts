import { Container } from 'inversify';
import { SwaggerDocumentation } from './swagger/swagger.docs';
import { DOCUMENTATION_REGISTRY } from './documentation.registry';
import lazy from 'inversify-inject-decorators';

export const DOCUMENTATION_MODULE = new Container({
  autoBindInjectable: true,
  defaultScope: 'Singleton',
});

DOCUMENTATION_MODULE.bind(DOCUMENTATION_REGISTRY.SWAGGER).toConstantValue(
  SwaggerDocumentation,
);

export const { lazyInject: injectDocumentation } = lazy(DOCUMENTATION_MODULE);
