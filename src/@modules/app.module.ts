import 'reflect-metadata';

import { Container } from 'inversify';
import { INFRA_MODULE } from './infra/infra.module';
import { APPLICATION_MODULE } from './application/application.module';

export const APP_MODULE = Container.merge(INFRA_MODULE, APPLICATION_MODULE);
