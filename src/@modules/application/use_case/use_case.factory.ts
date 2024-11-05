import { ICreateAccountUseCase } from '../../domain/use_case/account/create.use-case';
import { IDeleteAccountUseCase } from '../../domain/use_case/account/delete.use_case';
import { IFindCurrentAccountUseCase } from '../../domain/use_case/account/find/current.use_case';
import { USE_CASE_MODULE } from './use_case.module';
import { USE_CASE_REGISTRY } from './use_case.registry';

export const USE_CASE_FACTORY = {
  ACCOUNT: {
    CREATE: () =>
      USE_CASE_MODULE.get<ICreateAccountUseCase>(
        USE_CASE_REGISTRY.ACCOUNT.CREATE,
      ),
    DELETE: () =>
      USE_CASE_MODULE.get<IDeleteAccountUseCase>(
        USE_CASE_REGISTRY.ACCOUNT.DELETE,
      ),
    FIND: {
      CURRENT: () =>
        USE_CASE_MODULE.get<IFindCurrentAccountUseCase>(
          USE_CASE_REGISTRY.ACCOUNT.FIND.CURRENT,
        ),
    },
  },
};
