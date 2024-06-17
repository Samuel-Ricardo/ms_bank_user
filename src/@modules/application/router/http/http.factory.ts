import { Router } from 'express';
import { IHttpRouter } from '../../../domain/router/http/http.router';
import { HTTP_ROUTER_MODULE } from './http.module';
import { HTTP_ROUTER_REGISTRY } from './http.registry';

export const HTTP_ROUTER_FACTORY = {
  APP: () =>
    HTTP_ROUTER_MODULE.get<IHttpRouter<Router>>(HTTP_ROUTER_REGISTRY.APP),
};
