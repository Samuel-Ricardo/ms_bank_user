import { inject, injectable } from 'inversify';

import { IStartHTTPServerDTO } from '../../../../domain/DTO/server/http/start.dto';
import { IHTTPServer } from '../../../../domain/server/http/http.server';
import { MODULE } from '../../../../app.registry';

import { ErrorRequestHandler, Express, RequestHandler, Router } from 'express';
import { EXPRESS_BODY_PARSER_TYPE } from '../../../../../@types/infra/engine/server/http/express/parser/body.type';
import { EXPRESS_CORS_TYPE } from '../../../../../@types/infra/engine/server/http/express/cors.type';
import { IHttpRouter } from '../../../../domain/router/http/http.router';
import { logger } from '../../../../../@lib/log/logger.lib';

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
    @inject(MODULE.APPLICATION.ROUTER.HTTP.EXPRESS.ACCOUNT)
    private readonly accountRouter: IHttpRouter<Router>,
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
      logger.info(
        {
          context: 'EXPRESS_SERVER',
          message: `Express server started on port:`,
        },
        PORT,
      ),
    );
  }
  async setup() {
    logger.info({
      context: 'EXPRESS_SERVER',
      message: 'Setting up express server',
    });
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
    logger.info({
      context: 'EXPRESS_SERVER',
      message: 'Setting up express server wall middlewares',
    });
    this.engine.use(this.loggerMiddleware);
  }

  private setupRoutes() {
    logger.info({
      context: 'EXPRESS_SERVER',
      message: 'Setting up express server routes - [APP]',
    });
    this.engine.use(this.appRouter.setup());

    logger.info({
      context: 'EXPRESS_SERVER',
      message: 'Setting up express server routes - [DOCS]',
    });
    this.engine.use(this.docsRouter.setup());

    logger.info({
      context: 'EXPRESS_SERVER',
      message: 'Setting up express server routes - [ACCOUNT]',
    });
    this.engine.use(this.accountRouter.setup());
  }

  private setupEndMiddleware() {
    logger.info({
      context: 'EXPRESS_SERVER',
      message: 'Setting up express server background middlewares',
    });

    this.engine.use(this.errorLoggerMiddleware);
    this.engine.use(this.errorMiddleware);
  }
}
