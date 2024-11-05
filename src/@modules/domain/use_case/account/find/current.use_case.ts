import { IFindCurrentAccountDTO } from '../../../DTO/client/find/current.dto';
import { Account } from '../../../entity/account.entity';

export interface IFindCurrentAccountUseCase {
  execute(DTO: IFindCurrentAccountDTO): Promise<Account | undefined | null>;
}
