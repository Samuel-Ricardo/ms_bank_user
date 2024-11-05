import { inject, injectable } from 'inversify';
import { IAccountRepository } from '../../../../domain/repository/account.repository';
import { MODULE } from '../../../../app.registry';

@injectable()
export abstract class AccountPrismaRepositorySupport {
  constructor(
    @inject(MODULE.APPLICATION.REPOSITORY.PRISMA.ACCOUNT)
    protected readonly repository: IAccountRepository,
  ) {}
}
