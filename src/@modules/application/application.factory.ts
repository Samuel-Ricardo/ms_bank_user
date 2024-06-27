import { MIDDLEWARE_FACTORY } from './middleware/middleware.factory';
import { ROUTER_FACTORY } from './router/router.factory';

export const APPLICATION_FACTORY = {
  ROUTER: ROUTER_FACTORY,
  MIDDLEWARE: MIDDLEWARE_FACTORY,
};
