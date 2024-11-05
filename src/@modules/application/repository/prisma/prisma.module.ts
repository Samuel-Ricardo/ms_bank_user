import { Container } from 'inversify';
import { AccountPrismaRepository } from './account/account.repository';
import { PRISMA_REPOSITORY_REGISTRY } from './prisma.registry';

export const PRISMA_REPOSITORY_MODULE = new Container({
  autoBindInjectable: true,
  defaultScope: 'Singleton',
});

PRISMA_REPOSITORY_MODULE.bind(PRISMA_REPOSITORY_REGISTRY.ACCOUNT).to(
  AccountPrismaRepository,
);
