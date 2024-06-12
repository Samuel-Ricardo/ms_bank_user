import { IStartHTTPServerDTO } from '../../DTO/server/http/start.dto';

export interface IHTTPServer<T> {
  start(DTO?: IStartHTTPServerDTO): Promise<void>;
  setup(): Promise<void>;
  instance(): T;
}
