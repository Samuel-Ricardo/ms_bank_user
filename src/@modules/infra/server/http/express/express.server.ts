import { injectable } from 'inversify';
import { EXPRESS_CORS_TYPE } from '../../../../../@types/server/http/express/cors.type';
import { EXPRESS_BODY_PARSER_TYPE } from '../../../../../@types/server/http/express/parser/body.type';
import { IStartHTTPServerDTO } from '../../../../domain/DTO/server/http/start.dto';
import { IHTTPServer } from '../../../../domain/server/http/http.server';

import { Express } from 'express';

@injectable()
export class ExpressServer implements IHTTPServer<Express> {
  constructor(
    private readonly engine: Express,
    private readonly parser: EXPRESS_BODY_PARSER_TYPE,
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
