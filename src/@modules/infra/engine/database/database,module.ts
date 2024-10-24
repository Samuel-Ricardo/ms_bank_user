import { Container } from 'inversify';
import { DATABASE_ENGINE_REGISTRY } from './database.registry';
import { PRISMA_ENGINE } from './prisma/prisma.engine';

export const DATABASE_ENGINE_MODULE = new Container({
  autoBindInjectable: true,
  defaultScope: 'Singleton',
});

DATABASE_ENGINE_MODULE.bind(DATABASE_ENGINE_REGISTRY.PRISMA).toConstantValue(
  PRISMA_ENGINE,
);
