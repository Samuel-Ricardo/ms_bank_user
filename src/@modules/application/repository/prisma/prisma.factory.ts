import { IAccountRepository } from '../../../domain/repository/account.repository';
import { PRISMA_REPOSITORY_MODULE } from './prisma.module';
import { PRISMA_REPOSITORY_REGISTRY } from './prisma.registry';

export const PRISMA_REPOSITORY_FACTORY = {
  ACCOUNT: () =>
    PRISMA_REPOSITORY_MODULE.get<IAccountRepository>(
      PRISMA_REPOSITORY_REGISTRY.ACCOUNT,
    ),
};
