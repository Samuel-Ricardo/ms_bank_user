import { injectable, inject } from 'inversify';
import { MODULE } from '../../../app.registry';
import { IFindCurrentAccountDTO } from '../../../domain/DTO/client/find/current.dto';
import { IAccountService } from '../../../domain/sevice/account.service';
import { ICreateAccountDTO } from '../../../domain/DTO/client/create.dto';
import { IDeleteAccountDTO } from '../../../domain/DTO/client/delete.dto';

@injectable()
export class AccountController {
  constructor(
    @inject(MODULE.APPLICATION.SERVICE.ACCOUNT)
    private readonly service: IAccountService,
  ) {}

  async createAccount(DTO: ICreateAccountDTO) {
    return { data: await this.service.create(DTO) };
  }

  async deleteAccount(DTO: IDeleteAccountDTO) {
    return { data: await this.service.delete(DTO) };
  }

  async findCurrentAccount(DTO: IFindCurrentAccountDTO) {
    return { data: await this.service.findCurrent(DTO) };
  }
}
