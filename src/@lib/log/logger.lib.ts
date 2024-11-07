export const log = (
  {
    context,
    message,
  }: {
    context: string;
    message?: string;
  },
  ...data: any[]
) => console.log(`[${context}] | ${message}`, ...data);

export const logger = {
  error: (
    {
      context,
      message,
      error,
    }: {
      context: string;
      message: string;
      error?: Error | null | undefined;
    },
    ...data: any[]
  ) =>
    console.error(
      `[ ${new Date().toISOString()} ] - [${context}] | ${message} `,
      error,
      ...data,
    ),
  info: (
    { context, message }: { context: string; message: string },
    ...data: any[]
  ) =>
    console.info(
      `[ ${new Date().toISOString()} ] - [${context}] | ${message}`,
      ...data,
    ),
  warn: (
    { context, message }: { context: string; message: string },
    ...data: any[]
  ) =>
    console.warn(
      `[ ${new Date().toISOString()} ] - [${context}] | ${message}`,
      ...data,
    ),
};
