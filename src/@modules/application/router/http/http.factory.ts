import { Router } from 'express';
import { IHttpRouter } from '../../../domain/router/http/http.router';
import { EXPRESS_HTTP_ROUTER_MODULE } from './http.module';
import { EXPRESS_HTTP_ROUTER_REGISTRY } from './http.registry';

export const EXPRESS_HTTP_ROUTER_FACTORY = {
  APP: () =>
    EXPRESS_HTTP_ROUTER_MODULE.get<IHttpRouter<Router>>(
      EXPRESS_HTTP_ROUTER_REGISTRY.APP,
    ),
};
