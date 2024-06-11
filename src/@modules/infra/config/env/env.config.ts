import dotnev from 'dotenv';

dotnev.config();

export const ENV = {
  ...process.env,
  PORT: process.env.PORT || 3000,
  DATABASE: {
    URL: process.env.DATABASE_URL,
  },
};
