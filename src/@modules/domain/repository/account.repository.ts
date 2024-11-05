import { ICreateAccountOutputDTO } from '../DTO/Output/account/create.dto';
import { IDeleteAccountOutputDTO } from '../DTO/Output/account/delete.dto';
import { IFindCurrentAccountOutputDTO } from '../DTO/Output/account/find/current.dto';
import { ICreateAccountDTO } from '../DTO/client/create.dto';
import { IDeleteAccountDTO } from '../DTO/client/delete.dto';
import { IFindCurrentAccountDTO } from '../DTO/client/find/current.dto';
import { Account } from '../entity/account.entity';

export interface IAccountRepository {
  createAccount(DTO: ICreateAccountDTO): Promise<ICreateAccountOutputDTO>;
  deleteAccount(DTO: IDeleteAccountDTO): Promise<IDeleteAccountOutputDTO>;
  findCurrentAccount(
    DTO: IFindCurrentAccountDTO,
  ): Promise<Account | undefined | null>;
}
