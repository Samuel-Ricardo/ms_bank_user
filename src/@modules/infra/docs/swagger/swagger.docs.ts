import { RequestHandler } from 'express';
import { IDocumentation } from '../documentation.interface';
import { SWAGGER_ENGINE_TYPE } from '../../../../@types/infra/engine/docs/swagger.type';
import { injectEngine } from '../../engine/engine.module';
import { MODULE } from '../../../app.registry';

import DOCUMENTATION from '../../../../../docs/swagger.json';
import { injectable } from 'inversify';

@injectable()
export class SwaggerDocumentation
  implements IDocumentation<RequestHandler[], RequestHandler>
{
  @injectEngine(MODULE.INFRA.ENGINE.DOCS.SWAGGER)
  private readonly _engine!: SWAGGER_ENGINE_TYPE;

  server(): RequestHandler[] {
    return this._engine.serve;
  }

  setup(): RequestHandler {
    return this._engine.setup(DOCUMENTATION);
  }
}
