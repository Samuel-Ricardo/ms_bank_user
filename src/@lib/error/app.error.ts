import { IError } from '@/@types/error.type';
import { IErrorDTO } from '@/modules/domain/DTO/error/app.dto';

export class AppError extends Error implements IError {
  constructor(
    public message: string,
    public status: number = 400,
    public data?: any,
    public error: boolean = true,
  ) {
    super(message);
  }

  toStruct(): IErrorDTO {
    return {
      message: this.message,
      status: this.status,
      data: this.data,
      error: this.error,
    };
  }

  fromStruct(struct: IError | IErrorDTO): AppError {
    return new AppError(
      struct.message,
      struct.status,
      struct.data,
      struct.error,
    );
  }
}
