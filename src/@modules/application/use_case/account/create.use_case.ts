import { injectable } from 'inversify';
import { ICreateAccountUseCase } from '../../../domain/use_case/account/create.use-case';
import { ICreateAccountDTO } from '../../../domain/DTO/client/create.dto';
import { AccountPrismaRepositorySupport } from '../../support/repository/prisma/account.support';

@injectable()
export class CreateAccountInRepositoryUseCase
  extends AccountPrismaRepositorySupport
  implements ICreateAccountUseCase
{
  async execute(DTO: ICreateAccountDTO) {
    this.repository.createAccount(DTO);
  }
}
