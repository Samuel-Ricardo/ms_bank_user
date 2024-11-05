import { injectable } from 'inversify';
import { IFindCurrentAccountUseCase } from '../../../../domain/use_case/account/find/current.use_case';
import { IFindCurrentAccountDTO } from '../../../../domain/DTO/client/find/current.dto';
import { AccountPrismaRepositorySupport } from '../../../support/repository/prisma/account.support';

@injectable()
export class FindCurrentAccountInRepository
  extends AccountPrismaRepositorySupport
  implements IFindCurrentAccountUseCase
{
  async execute(DTO: IFindCurrentAccountDTO) {
    return this.repository.findCurrentAccount(DTO);
  }
}
