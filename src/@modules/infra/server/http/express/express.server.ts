import { inject, injectable } from 'inversify';

import { IStartHTTPServerDTO } from '../../../../domain/DTO/server/http/start.dto';
import { IHTTPServer } from '../../../../domain/server/http/http.server';
import { MODULE } from '../../../../app.registry';

import { ErrorRequestHandler, Express, RequestHandler, Router } from 'express';
import { EXPRESS_BODY_PARSER_TYPE } from '../../../../../@types/infra/engine/server/http/express/parser/body.type';
import { EXPRESS_CORS_TYPE } from '../../../../../@types/infra/engine/server/http/express/cors.type';
import { IHttpRouter } from '../../../../domain/router/http/http.router';

@injectable()
export class HTTPExpressServer implements IHTTPServer<Express> {
  constructor(
    @inject(MODULE.INFRA.ENGINE.SERVER.HTTP.EXPRESS.APP)
    private readonly engine: Express,
    @inject(MODULE.INFRA.ENGINE.SERVER.HTTP.EXPRESS.PARSER.BODY)
    private readonly parser: EXPRESS_BODY_PARSER_TYPE,
    @inject(MODULE.INFRA.ENGINE.SERVER.HTTP.EXPRESS.CORS)
    private readonly cors: EXPRESS_CORS_TYPE,
    @inject(MODULE.INFRA.CONFIG.PORT)
    private readonly PORT: number,
    @inject(MODULE.APPLICATION.ROUTER.HTTP.EXPRESS.APP)
    private readonly appRouter: IHttpRouter<Router>,
    @inject(MODULE.APPLICATION.ROUTER.HTTP.EXPRESS.DOCS)
    private readonly docsRouter: IHttpRouter<Router>,
    @inject(MODULE.APPLICATION.MIDDLEWARE.HTTP.EXPRESS.ERROR)
    private readonly errorMiddleware: ErrorRequestHandler,
    @inject(MODULE.APPLICATION.MIDDLEWARE.HTTP.EXPRESS.LOGGER.REQUEST)
    private readonly loggerMiddleware: RequestHandler,
    @inject(MODULE.APPLICATION.MIDDLEWARE.HTTP.EXPRESS.LOGGER.ERROR)
    private readonly errorLoggerMiddleware: ErrorRequestHandler,
  ) {}

  async start(DTO?: IStartHTTPServerDTO) {
    const PORT = DTO?.port || this.PORT;
    this.engine.listen(PORT, () =>
      console.log(`Express server listening on port ${PORT}`),
    );
  }
  async setup() {
    this.engine.use(this.cors);
    this.engine.use(this.parser);

    this.setupStartMiddlewares();
    this.setupRoutes();
    this.setupEndMiddleware();
  }

  instance(): Express {
    return this.engine;
  }

  private setupStartMiddlewares() {
    this.engine.use(this.loggerMiddleware);
  }

  private setupRoutes() {
    this.engine.use(this.appRouter.setup());
    this.engine.use(this.docsRouter.setup());
  }

  private setupEndMiddleware() {
    this.engine.use(this.errorLoggerMiddleware);
    this.engine.use(this.errorMiddleware);
  }
}
