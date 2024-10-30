import { ICreateAccountDTO } from '../DTO/client/create.dto';
import { IDeleteAccountDTO } from '../DTO/client/delete.dto';
import { IFindCurrentAccountDTO } from '../DTO/client/find/current.dto';
import { Account } from '../entity/account.entity';

export interface IAccountRepository {
  createAccount(DTO: ICreateAccountDTO): Promise<void>;
  deleteAccount(DTO: IDeleteAccountDTO): Promise<void>;
  findCurrentAccount(DTO: IFindCurrentAccountDTO): Promise<Account>;
}
