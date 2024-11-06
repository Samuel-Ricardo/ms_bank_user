import { ICreateAccountOutputDTO } from '../DTO/Output/account/create.dto';
import { IDeleteAccountOutputDTO } from '../DTO/Output/account/delete.dto';
import { ICreateAccountDTO } from '../DTO/client/create.dto';
import { IDeleteAccountDTO } from '../DTO/client/delete.dto';
import { IFindCurrentAccountDTO } from '../DTO/client/find/current.dto';
import { IUpdateAccountAddressDTO } from '../DTO/client/update/address.dto';
import { Account } from '../entity/account.entity';

export interface IAccountService {
  create(DTO: ICreateAccountDTO): Promise<void>;
  delete(DTO: IDeleteAccountDTO): Promise<void>;
  findCurrent(DTO: IFindCurrentAccountDTO): Promise<Account | undefined | null>;
  //  updatePersonalInformation(DTO: IUpdateAccountAddressDTO): Promise<void>;
}
