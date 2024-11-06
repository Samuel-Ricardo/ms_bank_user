import { IAccountService } from '../../domain/sevice/account.service';
import { SERVICE_MODULE } from './service.module';
import { SERVICE_REGISTRY } from './service.registry';

export const SERVICE_FACTORY = {
  ACCOUNT: () => SERVICE_MODULE.get<IAccountService>(SERVICE_REGISTRY.ACCOUNT),
};
