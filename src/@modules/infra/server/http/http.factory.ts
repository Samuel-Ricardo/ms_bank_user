import { HTTPExpressServer } from './express/express.server';
import { HTTP_SERVER_MODULE } from './http.module';
import { HTTP_SERVER_REGISTRY } from './http.register';

export const HTTP_SERVER_FACTORY = {
  EXPRESS: () =>
    HTTP_SERVER_MODULE.get<HTTPExpressServer>(HTTP_SERVER_REGISTRY.EXPRESS),
};
