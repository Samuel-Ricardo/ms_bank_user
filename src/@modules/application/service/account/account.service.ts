import { inject, injectable } from 'inversify';
import { ICreateAccountUseCase } from '../../../domain/use_case/account/create.use-case';
import { IAccountService } from '../../../domain/sevice/account.service';
import { MODULE } from '../../../app.registry';
import { IDeleteAccountUseCase } from '../../../domain/use_case/account/delete.use_case';
import { IFindCurrentAccountUseCase } from '../../../domain/use_case/account/find/current.use_case';
import { ICreateAccountOutputDTO } from '../../../domain/DTO/Output/account/create.dto';
import { IDeleteAccountOutputDTO } from '../../../domain/DTO/Output/account/delete.dto';
import { ICreateAccountDTO } from '../../../domain/DTO/client/create.dto';
import { IDeleteAccountDTO } from '../../../domain/DTO/client/delete.dto';
import { IFindCurrentAccountDTO } from '../../../domain/DTO/client/find/current.dto';
import { IUpdateAccountAddressDTO } from '../../../domain/DTO/client/update/address.dto';
import { Account } from '../../../domain/entity/account.entity';

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

  create(DTO: ICreateAccountDTO): Promise<ICreateAccountOutputDTO> {
    throw new Error('Method not implemented.');
  }
  delete(DTO: IDeleteAccountDTO): Promise<IDeleteAccountOutputDTO> {
    throw new Error('Method not implemented.');
  }
  findCurrent(DTO: IFindCurrentAccountDTO): Promise<Account> {
    throw new Error('Method not implemented.');
  }
  updatePersonalInformation(DTO: IUpdateAccountAddressDTO): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
