import { PrismaClient } from '@prisma/client';
import { DATABASE_ENGINE_MODULE } from './database,module';
import { DATABASE_ENGINE_REGISTRY } from './database.registry';

export const DATABASE_ENGINE_FACTORY = {
  PRISMA: () =>
    DATABASE_ENGINE_MODULE.get<PrismaClient>(DATABASE_ENGINE_REGISTRY.PRISMA),
};
