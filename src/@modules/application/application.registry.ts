import { MIDDLEWARE_REGISTRY } from './middleware/middleware.registry';
import { REPOSITORY_REGISTRY } from './repository/repository.registry';
import { ROUTER_REGISTRY } from './router/router.registry';

export const APPLICATION_REGISTRY = {
  ROUTER: ROUTER_REGISTRY,
  MIDDLEWARE: MIDDLEWARE_REGISTRY,
  REPOSITORY: REPOSITORY_REGISTRY,
};
