import { IError } from '../../@types/lib/error.type';
import { IErrorDTO } from '../../@modules/domain/DTO/error/app.dto';

export class AppError extends Error implements IError {
  constructor(
    public message: string,
    public status: number = 400,
    public data?: any,
    public error: boolean = true,
  ) {
    super(message);
  }
}
