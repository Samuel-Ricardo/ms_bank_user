import { PrismaClient } from '@prisma/client';
import { injectEngine } from '../../../../infra/engine/engine.module';
import { MODULE } from '../../../../app.registry';
import { injectable } from 'inversify';

@injectable()
export abstract class PrismaEngineSupport {
  @injectEngine(MODULE.INFRA.ENGINE.DATABASE.PRISMA)
  protected readonly engine!: PrismaClient;
}
