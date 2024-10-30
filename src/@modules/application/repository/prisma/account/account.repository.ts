import { injectable } from 'inversify';
import { IAccountRepository } from '../../../../domain/repository/account.repository';
import { ICreateAccountDTO } from '../../../../domain/DTO/client/create.dto';
import { IDeleteAccountDTO } from '../../../../domain/DTO/client/delete.dto';
import { IFindCurrentAccountDTO } from '../../../../domain/DTO/client/find/current.dto';
import { Account } from '../../../../domain/entity/account.entity';
import { PrismaEngineSupport } from '../../../support/engine/repository/prisma.support';

@injectable()
export class AccountPrismaRepository
  extends PrismaEngineSupport
  implements IAccountRepository
{
  async createAccount(DTO: ICreateAccountDTO) {
    const result = await this.engine.account.create({ data: { ...DTO } });
    return { id: result.id };
  }

  deleteAccount(DTO: IDeleteAccountDTO): Promise<void> {
    throw new Error('Method not implemented.');
  }
  findCurrentAccount(DTO: IFindCurrentAccountDTO): Promise<Account> {
    throw new Error('Method not implemented.');
  }
}
