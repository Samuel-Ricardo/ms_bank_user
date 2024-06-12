import { IHTTPServer } from '../../../domain/server/http/http.server';
import { HTTP_SERVER_MODULE } from './http.module';
import { HTTP_SERVER_REGISTRY } from './http.register';

import { Express } from 'express';

export const HTTP_SERVER_FACTORY = {
  EXPRESS: () =>
    HTTP_SERVER_MODULE.get<IHTTPServer<Express>>(HTTP_SERVER_REGISTRY.EXPRESS),
};
