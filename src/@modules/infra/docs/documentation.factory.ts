import { RequestHandler } from 'express';
import { IDocumentation } from './documentation.interface';
import { DOCUMENTATION_MODULE } from './documentation.module';
import { DOCUMENTATION_REGISTRY } from './documentation.registry';

export const DOCUMENTATION_FACTORY = {
  SWAGGER: () =>
    DOCUMENTATION_MODULE.get<IDocumentation<RequestHandler[], RequestHandler>>(
      DOCUMENTATION_REGISTRY.SWAGGER,
    ),
};
