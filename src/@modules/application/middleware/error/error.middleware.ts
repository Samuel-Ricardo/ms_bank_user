import { ErrorRequestHandler } from 'express';
import { AppError } from '../../../../@lib/error/app.error';

export const ERROR_MIDDLEWARE: ErrorRequestHandler = (
  error,
  req,
  res,
  next,
) => {
  return error instanceof AppError
    ? res.status(error.status).json(error.toStruct())
    : res.status(500).json({
        name: error.name,
        status: 500,
        message: error.message,
        error: true,
      });
};
