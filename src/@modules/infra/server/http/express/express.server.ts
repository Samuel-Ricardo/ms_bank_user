import { inject, injectable } from 'inversify';

import { IStartHTTPServerDTO } from '../../../../domain/DTO/server/http/start.dto';
import { IHTTPServer } from '../../../../domain/server/http/http.server';
import { MODULE } from '../../../../app.registry';

import { Express } from 'express';
import { EXPRESS_BODY_PARSER_TYPE } from '../../../../../@types/infra/engine/server/http/express/parser/body.type';
import { EXPRESS_CORS_TYPE } from '../../../../../@types/infra/engine/server/http/express/cors.type';

@injectable()
export class ExpressServer implements IHTTPServer<Express> {
  constructor(
    @inject(MODULE.INFRA.ENGINE.SERVER.HTTP.EXPRESS.APP)
    private readonly engine: Express,
    @inject(MODULE.INFRA.ENGINE.SERVER.HTTP.EXPRESS.PARSER.BODY)
    private readonly parser: EXPRESS_BODY_PARSER_TYPE,
    @inject(MODULE.INFRA.ENGINE.SERVER.HTTP.EXPRESS.CORS)
    private readonly cors: EXPRESS_CORS_TYPE,
  ) {}

  async start(DTO?: IStartHTTPServerDTO) {
    this.engine.listen(DTO?.port, () => {});
  }
  async setup() {
    this.engine.use(this.cors);
    this.engine.use(this.parser);
  }

  instance(): Express {
    return this.engine;
  }
}
