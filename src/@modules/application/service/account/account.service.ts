import { inject, injectable } from 'inversify';
import { ICreateAccountUseCase } from '../../../domain/use_case/account/create.use-case';
import { IAccountService } from '../../../domain/sevice/account.service';
import { MODULE } from '../../../app.registry';
import { IDeleteAccountUseCase } from '../../../domain/use_case/account/delete.use_case';
import { IFindCurrentAccountUseCase } from '../../../domain/use_case/account/find/current.use_case';
import { ICreateAccountDTO } from '../../../domain/DTO/client/create.dto';
import { IDeleteAccountDTO } from '../../../domain/DTO/client/delete.dto';
import { IFindCurrentAccountDTO } from '../../../domain/DTO/client/find/current.dto';

@injectable()
export class AccountService implements IAccountService {
  constructor(
    @inject(MODULE.APPLICATION.USE_CASE.ACCOUNT.CREATE)
    private readonly createAccount: ICreateAccountUseCase,
    @inject(MODULE.APPLICATION.USE_CASE.ACCOUNT.DELETE)
    private readonly deleteAccount: IDeleteAccountUseCase,
    @inject(MODULE.APPLICATION.USE_CASE.ACCOUNT.FIND.CURRENT)
    private readonly findCurrentAccount: IFindCurrentAccountUseCase,
  ) {}

  async create(DTO: ICreateAccountDTO) {
    return await this.createAccount.execute(DTO);
  }

  async delete(DTO: IDeleteAccountDTO) {
    return await this.deleteAccount.execute(DTO);
  }

  async findCurrent(DTO: IFindCurrentAccountDTO) {
    return await this.findCurrentAccount.execute(DTO);
  }
}
