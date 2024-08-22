import { RequestHandler } from 'express';
import { IDocumentation } from '../documentation.interface';
import { ParamsDictionary } from 'express-serve-static-core';
import { ParsedQs } from 'qs';

export class SwaggerDocumentation
  implements IDocumentation<RequestHandler, RequestHandler>
{
  server(): RequestHandler<
    ParamsDictionary,
    any,
    any,
    ParsedQs,
    Record<string, any>
  > {
    throw new Error('Method not implemented.');
  }
  setup(): RequestHandler<
    ParamsDictionary,
    any,
    any,
    ParsedQs,
    Record<string, any>
  > {
    throw new Error('Method not implemented.');
  }
}
