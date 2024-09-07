import { RequestHandler, Router } from 'express';
import { inject, injectable } from 'inversify';
import { MODULE } from '../../../../app.registry';
import { IDocumentation } from '../../../../infra/docs/documentation.interface';
import { IHttpRouter } from '../../../../domain/router/http/http.router';
import { injectEngine } from '../../../../infra/engine/engine.module';

@injectable()
export class ExpressDocsRouter implements IHttpRouter<Router> {
  @injectEngine(MODULE.INFRA.ENGINE.SERVER.HTTP.EXPRESS.ROUTER)
  private readonly router!: Router;

  constructor(
    @inject(MODULE.INFRA.DOCS.SWAGGER)
    private readonly docs: IDocumentation<RequestHandler, RequestHandler>,
  ) {}

  setup(): Router {
    this.setupDocs();
    return this.router;
  }

  private setupDocs() {
    this.router.get('/api/docs', this.docs.server(), this.docs.setup());
  }
}
