export interface Configuration {
  NODE_ENV: string;
  port: number;
  DB_TYPE: string;
  DB_NAME: string;
  DB_HOST: string;
  DB_PORT: number;
  DB_USERNAME: string;
  DB_PASSWORD: string;
}

export const configuration = (): Configuration => ({
  NODE_ENV: process.env.NODE_ENV,
  port: +process.env.PORT || 3000,
  DB_HOST: process.env.DB_HOST,
  DB_PORT: +process.env.DB_PORT,
  DB_NAME: process.env.DB_NAME,
  DB_PASSWORD: process.env.DB_PASSWORD,
  DB_USERNAME: process.env.DB_USERNAME,
  DB_TYPE: process.env.DB_TYPE,
});
