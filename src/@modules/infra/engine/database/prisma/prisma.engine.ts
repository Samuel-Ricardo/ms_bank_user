import { PrismaClient } from '@prisma/client';

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const PRISMA_ENGINE = globalForPrisma.prisma ?? new PrismaClient();

if (process.env.NODE_ENV !== 'production')
  globalForPrisma.prisma = PRISMA_ENGINE;
