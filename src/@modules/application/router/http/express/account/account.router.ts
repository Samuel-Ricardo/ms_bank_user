import { Router } from 'express';
import { MODULE } from '../../../../../app.registry';
import { IHttpRouter } from '../../../../../domain/router/http/http.router';
import { injectEngine } from '../../../../../infra/engine/engine.module';
import { AccountController } from '../../../../controller/account/account.controller';
import { inject } from 'inversify';

export class ExpressAccountRouter implements IHttpRouter<Router> {
  @injectEngine(MODULE.INFRA.ENGINE.SERVER.HTTP.EXPRESS.ROUTER)
  private readonly _router!: Router;
  private readonly _basePath = '/account';

  constructor(
    @inject(MODULE.APPLICATION.CONTROLLER.ACCOUNT)
    private readonly _module: AccountController,
  ) {}

  setup(): Router {
    this.setupAccount();
    return this._router;
  }

  private setupAccount() {
    this._router.post(`${this._basePath}`, async (req, res, next) => {
      try {
        await this._module.findCurrentAccount(req.body);
        return res.status(201);
      } catch (error) {
        next(error);
      }
    });

    this._router.delete(`${this._basePath}`, async (req, res, next) => {
      try {
        await this._module.deleteAccount(req.body);
        return res.status(204);
      } catch (error) {
        next(error);
      }
    });

    this._router.get(`${this._basePath}/:cpf`, async (req, res, next) => {
      try {
        const result = await this._module.findCurrentAccount({
          cpf: req.params.cpf,
        });
        return res.status(200).json(result);
      } catch (error) {
        next(error);
      }
    });
  }
}
