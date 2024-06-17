import { inject, injectable } from 'inversify';
import { IHttpRouter } from '../../../../domain/router/http/http.router';
import { Router } from 'express';
import { MODULE } from '../../../../app.registry';

@injectable()
export class ExpressAppRouter implements IHttpRouter<Router> {
  constructor(
    @inject(MODULE.INFRA.ENGINE.SERVER.HTTP.EXPRESS.ROUTER)
    private readonly router: Router,
  ) {}

  setup(): Router {
    this.setupHome();
    return this.router;
  }

  private setupHome() {
    this.router.get('/', (req, res, next) => {
      try {
        return res.send({ data: 'Hello World! :D' });
      } catch (error) {
        next(error);
      }
    });
  }
}
