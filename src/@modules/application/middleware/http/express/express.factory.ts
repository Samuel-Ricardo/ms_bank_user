import { ErrorRequestHandler } from 'express';
import { EXPRESS_HTTP_MIDDLEWARE_MODULE } from './express.module';
import { EXPRESS_HTTP_MIDDLEWARE_REGISTRY } from './express.registry';

export const EXPRESS_HTTP_MIDDLEWARE_FACTORY = {
  ERROR: EXPRESS_HTTP_MIDDLEWARE_MODULE.get<ErrorRequestHandler>(
    EXPRESS_HTTP_MIDDLEWARE_REGISTRY.ERROR,
  ),
};
