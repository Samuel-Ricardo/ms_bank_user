import { injectable } from 'inversify';
import { AccountPrismaRepositorySupport } from '../../support/repository/prisma/account.support';
import { IDeleteAccountUseCase } from '../../../domain/use_case/account/delete.use_case';
import { IDeleteAccountDTO } from '../../../domain/DTO/client/delete.dto';

@injectable()
export class DeleteAccountInRepositoryUseCase
  extends AccountPrismaRepositorySupport
  implements IDeleteAccountUseCase
{
  async execute(DTO: IDeleteAccountDTO) {
    this.repository.deleteAccount(DTO);
  }
}
