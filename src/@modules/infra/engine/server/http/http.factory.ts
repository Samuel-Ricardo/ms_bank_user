import { EXPRESS_CORS_TYPE } from '../../../../../@types/infra/engine/server/http/express/cors.type';
import { EXPRESS_BODY_PARSER_TYPE } from '../../../../../@types/infra/engine/server/http/express/parser/body.type';
import { HTTP_SERVER_ENGINE_MODULE } from './http.module';
import { HTTP_SERVER_ENGINE_REGISTRY } from './http.registry';

import { Express } from 'express';

export const HTTP_SERVER_ENGINE_FACTORY = {
  EXPRESS: {
    APP: () =>
      HTTP_SERVER_ENGINE_MODULE.get<Express>(
        HTTP_SERVER_ENGINE_REGISTRY.EXPRESS.APP,
      ),
    CORS: () =>
      HTTP_SERVER_ENGINE_MODULE.get<EXPRESS_CORS_TYPE>(
        HTTP_SERVER_ENGINE_REGISTRY.EXPRESS.CORS,
      ),
    PARSER: {
      BODY: () =>
        HTTP_SERVER_ENGINE_MODULE.get<EXPRESS_BODY_PARSER_TYPE>(
          HTTP_SERVER_ENGINE_REGISTRY.EXPRESS.PARSER.BODY,
        ),
    },
  },
};
