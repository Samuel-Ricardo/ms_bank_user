import { SWAGGER_ENGINE_TYPE } from '../../../@types/infra/engine/docs/swagger.type';
import { DATABASE_ENGINE_FACTORY } from './database/database.factory';
import { ENGINE_MODULE } from './engine.module';
import { ENGINE_REGISTRY } from './engine.registry';
import { SERVER_ENGINE_FACTORY } from './server/server.factory';

export const ENGINE_FACTORY = {
  SERVER: SERVER_ENGINE_FACTORY,
  DATABASE: DATABASE_ENGINE_FACTORY,
  DOCS: {
    SWAGGER: () =>
      ENGINE_MODULE.get<SWAGGER_ENGINE_TYPE>(ENGINE_REGISTRY.DOCS.SWAGGER),
  },
};
