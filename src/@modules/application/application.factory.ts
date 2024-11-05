import { MIDDLEWARE_FACTORY } from './middleware/middleware.factory';
import { REPOSITORY_FACTORY } from './repository/repository.factory';
import { ROUTER_FACTORY } from './router/router.factory';
import { USE_CASE_FACTORY } from './use_case/use_case.factory';

export const APPLICATION_FACTORY = {
  ROUTER: ROUTER_FACTORY,
  MIDDLEWARE: MIDDLEWARE_FACTORY,
  REPOSITORY: REPOSITORY_FACTORY,
  USE_CASE: USE_CASE_FACTORY,
};
