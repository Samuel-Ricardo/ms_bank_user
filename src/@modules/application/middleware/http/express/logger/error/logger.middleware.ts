import { ErrorRequestHandler } from 'express';
import { logger } from '../../../../../../../@lib/log/logger.lib';

export const ERROR_LOGGER_MIDDLEWARE: ErrorRequestHandler = (
  error: Error,
  req,
  res,
  next,
) => {
  logger.error({ context: 'APP', message: error.message, error });
  next(error);
};
